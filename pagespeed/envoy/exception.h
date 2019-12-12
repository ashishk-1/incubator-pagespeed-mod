#pragma once

#include <stdexcept>
#include <string>

namespace net_instaweb {
/**
 * Base class for all Envoy exceptions.
 */
class EnvoyException : public std::runtime_error {
public:
  EnvoyException(const std::string& message) : std::runtime_error(message) {}
};

// TODO(oschaaf): restructure.
namespace Client {

/**
 * We translate certain exceptions thrown by TCLAP to NoServingException, for example when
 * help is invoked. This exception is then caught further up the stack and handled.
 */
class NoServingException : public EnvoyException {
public:
  NoServingException() : EnvoyException("NoServingException") {}
};

/**
 * Thrown when an OptionsImpl was not constructed because the argv was invalid.
 */
class MalformedArgvException : public EnvoyException {
public:
  MalformedArgvException(const std::string& what) : EnvoyException(what) {}
};

} // namespace Client

} // namespace net_instaweb
