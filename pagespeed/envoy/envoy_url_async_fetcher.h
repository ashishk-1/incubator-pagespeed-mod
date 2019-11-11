/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//
// Fetch the resources asynchronously using envoy. The fetcher is called in
// the rewrite thread.
//

#ifndef NET_INSTAWEB_ENVOY_URL_ASYNC_FETCHER_H_
#define NET_INSTAWEB_ENVOY_URL_ASYNC_FETCHER_H_

#pragma once
#include <vector>

#include "apr_network_io.h"
#include "net/instaweb/http/public/url_async_fetcher.h"
#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/base/pool.h"
#include "pagespeed/kernel/base/string.h"
#include "pagespeed/kernel/base/thread_system.h"
#include "envoy_cluster_manager.h"

#include "external/envoy_api/envoy/api/v2/core/http_uri.pb.h"


namespace net_instaweb {

class AsyncFetch;
class MessageHandler;
class Statistics;
class Variable;

class EnvoyFetch {};


/**
 * Failure reason.
 */
enum class FailureReason {
  /* A network error occurred causing remote data retrieval failure. */
  Network,
  /* A failure occurred when trying to verify remote data using sha256. */
  InvalidData,
};

/**
 * Callback used by remote data fetcher.
 */
class EnvoyRemoteDataFetcherCallback {
public:
  virtual ~EnvoyRemoteDataFetcherCallback() = default;

  /**
   * This function will be called when data is fetched successfully from remote.
   * @param data remote data
   */
  virtual void onSuccess(const std::string& data) PURE;

  /**
   * This function is called when error happens during fetching data.
   * @param reason failure reason.
   */
  virtual void onFailure(FailureReason reason) PURE;
};

/**
 * Envoy Remote data fetcher.
 */
class EnvoyRemoteDataFetcher : public Envoy::Logger::Loggable<Envoy::Logger::Id::config>,
                          public Envoy::Http::AsyncClient::Callbacks {
public:
  EnvoyRemoteDataFetcher(Envoy::Upstream::ClusterManager& cm, const ::envoy::api::v2::core::HttpUri& uri,
                    const std::string& content_hash, EnvoyRemoteDataFetcherCallback& callback);

  ~EnvoyRemoteDataFetcher() override;

  // Http::AsyncClient::Callbacks
  void onSuccess(Envoy::Http::MessagePtr&& response) override;
  void onFailure(Envoy::Http::AsyncClient::FailureReason reason) override;

  /**
   * Fetch data from remote.
   * @param uri remote URI
   * @param content_hash for verifying data integrity
   * @param callback callback when fetch is done.
   */
  void fetch();

  /**
   * Cancel the fetch.
   */
  void cancel();

private:
  Envoy::Upstream::ClusterManager& cm_;
  const envoy::api::v2::core::HttpUri& uri_;
  const std::string content_hash_;
  EnvoyRemoteDataFetcherCallback& callback_;

  Envoy::Http::AsyncClient::Request* request_{};
};

class PagepeedCallback : public EnvoyRemoteDataFetcherCallback {
public:
  // Config::DataFetcher::RemoteDataFetcherCallback
  void onSuccess(const std::string& data) override {}

  // Config::DataFetcher::RemoteDataFetcherCallback
  void onFailure(FailureReason reason) override {}
};

class EnvoyUrlAsyncFetcher : public UrlAsyncFetcher {
public:
  EnvoyUrlAsyncFetcher(const char* proxy, ThreadSystem* thread_system, Statistics* statistics,
                       Timer* timer, int64 timeout_ms, MessageHandler* handler);

  ~EnvoyUrlAsyncFetcher();

  // It should be called in the module init_process callback function. Do some
  // intializations which can't be done in the master process
  bool Init();

  // shutdown all the fetches.
  virtual void ShutDown();

  virtual bool SupportsHttps() const { return false; }

  virtual void Fetch(const GoogleString& url, MessageHandler* message_handler,
                     AsyncFetch* callback);

  // Remove the completed fetch from the active fetch set, and put it into a
  // completed fetch list to be cleaned up.
  void FetchComplete(EnvoyFetch* fetch);
  void PrintActiveFetches(MessageHandler* handler) const;

  // Indicates that it should track the original content length for
  // fetched resources.
  bool track_original_content_length() { return track_original_content_length_; }
  void set_track_original_content_length(bool x) { track_original_content_length_ = x; }

  // AnyPendingFetches is accurate only at the time of call; this is
  // used conservatively during shutdown.  It counts fetches that have been
  // requested by some thread, and can include fetches for which no action
  // has yet been taken (ie fetches that are not active).
  virtual bool AnyPendingFetches() { return !active_fetches_.empty(); }

  // ApproximateNumActiveFetches can under- or over-count and is used only for
  // error reporting.
  int ApproximateNumActiveFetches() { return active_fetches_.size(); }

  void CancelActiveFetches();

  // These must be accessed with mutex_ held.
  bool shutdown() const { return shutdown_; }
  void set_shutdown(bool s) { shutdown_ = s; }

protected:
  typedef Pool<EnvoyFetch> EnvoyFetchPool;

private:
  void fetch();

  static void TimeoutHandler();
  static bool ParseUrl();
  friend class EnvoyFetch;

  EnvoyFetchPool active_fetches_;
  // Add the pending task to this list
  std::unique_ptr<EnvoyRemoteDataFetcher> EnvoyRemoteDataFetcherPtr;
  EnvoyClusterManager* cluster_manager_;
  EnvoyFetchPool pending_fetches_;
  EnvoyFetchPool completed_fetches_;
  char* proxy_;

  int fetchers_count_;
  bool shutdown_;
  bool track_original_content_length_;
  int64 byte_count_;
  ThreadSystem* thread_system_;
  MessageHandler* message_handler_;
  // Protect the member variable in this class
  // active_fetches, pending_fetches
  ThreadSystem::CondvarCapableMutex* mutex_;

  apr_pool_t* pool_;
  int64 resolver_timeout_;
  int64 fetch_timeout_;

  DISALLOW_COPY_AND_ASSIGN(EnvoyUrlAsyncFetcher);
};

} // namespace net_instaweb

#endif // NET_INSTAWEB_ENVOY_URL_ASYNC_FETCHER_H_$