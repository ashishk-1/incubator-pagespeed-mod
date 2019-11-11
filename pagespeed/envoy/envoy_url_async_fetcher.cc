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

#include "envoy_url_async_fetcher.h"

#include <algorithm>
#include <list>
#include <map>
#include <set>
#include <string>
#include <vector>

#include "net/instaweb/http/public/async_fetch.h"
#include "net/instaweb/http/public/inflating_fetch.h"
#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/base/condvar.h"
#include "pagespeed/kernel/base/message_handler.h"
#include "pagespeed/kernel/base/pool.h"
#include "pagespeed/kernel/base/pool_element.h"
#include "pagespeed/kernel/base/statistics.h"
#include "pagespeed/kernel/base/string_util.h"
#include "pagespeed/kernel/base/thread_system.h"
#include "pagespeed/kernel/base/timer.h"
#include "pagespeed/kernel/base/writer.h"
#include "pagespeed/kernel/http/request_headers.h"
#include "pagespeed/kernel/http/response_headers.h"
#include "pagespeed/kernel/http/response_headers_parser.h"



namespace net_instaweb {

EnvoyUrlAsyncFetcher::EnvoyUrlAsyncFetcher(const char* proxy, ThreadSystem* thread_system,
                                           Statistics* statistics, Timer* timer, int64 timeout_ms,
                                           MessageHandler* handler)
    : fetchers_count_(0), shutdown_(false), track_original_content_length_(false), byte_count_(0),
      thread_system_(thread_system), message_handler_(handler), mutex_(NULL) {
  if (!Init()) {
    shutdown_ = true;
    message_handler_->Message(kError, "EnvoyUrlAsyncFetcher failed to init, fetching disabled.");
  }
}

EnvoyUrlAsyncFetcher::~EnvoyUrlAsyncFetcher() {
}

EnvoyRemoteDataFetcher::EnvoyRemoteDataFetcher(Envoy::Upstream::ClusterManager& cm,
                                     const ::envoy::api::v2::core::HttpUri& uri,
                                     const std::string& content_hash,
                                     EnvoyRemoteDataFetcherCallback& callback)
    : cm_(cm), uri_(uri), content_hash_(content_hash), callback_(callback) {}

EnvoyRemoteDataFetcher::~EnvoyRemoteDataFetcher() { cancel(); }

void EnvoyRemoteDataFetcher::cancel() {
  if (request_) {
    request_->cancel();
    ENVOY_LOG(debug, "fetch remote data [uri = {}]: canceled", uri_.uri());
  }

  request_ = nullptr;
}

void EnvoyRemoteDataFetcher::fetch() {
  Envoy::Http::MessagePtr message = Envoy::Http::Utility::prepareHeaders(uri_);
  message->headers().insertMethod().value().setReference(Envoy::Http::Headers::get().MethodValues.Get);
  ENVOY_LOG(debug, "fetch remote data from [uri = {}]: start", uri_.uri());
  request_ = cm_.httpAsyncClientForCluster(uri_.cluster())
                 .send(std::move(message), *this,
                       Envoy::Http::AsyncClient::RequestOptions().setTimeout(std::chrono::milliseconds(
                           Envoy::DurationUtil::durationToMilliseconds(uri_.timeout()))));
}

void EnvoyRemoteDataFetcher::onSuccess(Envoy::Http::MessagePtr&& response) {
  std::cout << "PagespeedRemoteDataFetcher::onSuccess data: " << response->body()->toString() << "\n";
  std::cout.flush();
  callback_.onSuccess(response->body()->toString());
  request_ = nullptr;
}

void EnvoyRemoteDataFetcher::onFailure(Envoy::Http::AsyncClient::FailureReason reason) {
  // ENVOY_LOG(debug, "fetch remote data [uri = {}]: network error {}", uri_.uri(), enumToInt(reason));
  request_ = nullptr;
  callback_.onFailure(FailureReason::Network);
  // std::cout << "PagespeedRemoteDataFetcher::onFailure\n";
  // std::cout.flush();
  // request_ = nullptr;
}

void EnvoyUrlAsyncFetcher::fetch(){
  envoy::api::v2::core::HttpUri http_uri;
  http_uri.set_uri("http://127.0.0.1:80");
  http_uri.set_cluster("cluster1");
  std::string uriHash("123456789");

  PagepeedCallback* cb = new PagepeedCallback();
  std::unique_ptr<EnvoyRemoteDataFetcher> EnvoyRemoteDataFetcherPtr =
      std::make_unique<EnvoyRemoteDataFetcher>(*cluster_manager_->getClusterManager(), http_uri, uriHash, *cb);

  EnvoyRemoteDataFetcherPtr->fetch();

  cluster_manager_->getDispatcher()->run(Envoy::Event::Dispatcher::RunType::Block);
}

bool EnvoyUrlAsyncFetcher::Init() {
  cluster_manager_ = new EnvoyClusterManager();
  for(int i =0;i<5;i++){
      fetch();
  }
  

  return true;
}

void EnvoyUrlAsyncFetcher::ShutDown() {}

void EnvoyUrlAsyncFetcher::Fetch(const GoogleString& url, MessageHandler* message_handler,
                                 AsyncFetch* async_fetch) {}

void EnvoyUrlAsyncFetcher::FetchComplete(EnvoyFetch* fetch) {
}

void EnvoyUrlAsyncFetcher::PrintActiveFetches(MessageHandler* handler) const {
}

void EnvoyUrlAsyncFetcher::CancelActiveFetches() {
}

bool EnvoyUrlAsyncFetcher::ParseUrl(){
  return false;
}

} // namespace net_instaweb