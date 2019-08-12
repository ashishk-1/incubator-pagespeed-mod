licenses(["notice"])  # Apache 2

load("//bazel:closure_compiler.bzl", "closure_compiler_gen")

cc_library(
    name = "net_instaweb_lib",
    hdrs = [
        "public/version.h",
        "public/global_constants.h",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "//pagespeed/kernel/base:pagespeed_base_core",
    ]
)

closure_compiler_gen(
    name = "critical_images_beacon_js_opt",
    srcs = [
        "rewriter/critical_images_beacon.js",
    ],
    js_dir = "rewriter",
    js_includes = [
        "js/js_utils.js",
    ],
    entry_points = [
        "goog:pagespeed.CriticalImages",
    ],
    opt = True,
)
