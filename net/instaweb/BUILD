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
    name = "caches_js_dbg",
    js_src = "pagespeed/system/caches.js",
    js_dir = "system",
    entry_points = [
        "goog:pagespeed.Caches",
    ],
    opt = False,
)

closure_compiler_gen(
    name = "caches_js_opt",
    js_src = "pagespeed/system/caches.js",
    js_dir = "system",
    entry_points = [
        "goog:pagespeed.Caches",
    ],
    opt = True,
)

closure_compiler_gen(
    name = "console_js_opt",
    js_src = "pagespeed/system/console.js",
    js_dir = "system",
    # js_includes = [
    #     "/pagespeed/system/console_start.js",
    # ],
    entry_points = [
        "goog:pagespeed.Console",
        "goog:pagespeed.statistics",
    ],
    externs = [
        "/pagespeed/system/js_externs.js",
        "/third_party/closure/externs/google_visualization_api.js",
    ],
    opt = True,
)

closure_compiler_gen(
    name = "console_js_dbg",
    js_src = "/pagespeed/system/console.js",
    js_dir = "system",
    # js_includes = [
    #     "/pagespeed/system/console_start.js",
    # ],
    entry_points = [
        "goog:pagespeed.Console",
        "goog:pagespeed.statistics",
    ],
    externs = [
        "/pagespeed/system/js_externs.js",
        "/third_party/closure/externs/google_visualization_api.js",
    ],
    opt = False,
)

closure_compiler_gen(
    name = "critical_css_loader_js_dbg",
    js_src = "net/instaweb/rewriter/critical_css_loader.js",
    js_dir = "rewriter",
    js_includes = [
        "net/instaweb/js/js_utils.js",
    ],
    entry_points = [
        "goog:pagespeed.CriticalCssLoader",
    ],
    opt = False,
)

closure_compiler_gen(
    name = "critical_css_loader_js_opt",
    js_src = "net/instaweb/rewriter/critical_css_loader.js",
    js_dir = "rewriter",
    js_includes = [
        "net/instaweb/js/js_utils.js",
    ],
    entry_points = [
        "goog:pagespeed.CriticalCssLoader",
    ],
    opt = True,
)

closure_compiler_gen(
    name = "critical_images_beacon_js_dbg",
    js_src = "net/instaweb/rewriter/critical_images_beacon.js",
    js_dir = "rewriter",
    js_includes = [
        "net/instaweb/js/js_utils.js",
    ],
    entry_points = [
        "goog:pagespeed.CriticalImages",
    ],
    opt = False,
)

closure_compiler_gen(
    name = "critical_images_beacon_js_opt",
    js_src = "net/instaweb/rewriter/critical_images_beacon.js",
    js_dir = "rewriter",
    js_includes = [
        "net/instaweb/js/js_utils.js",
    ],
    entry_points = [
        "goog:pagespeed.CriticalImages",
    ],
    opt = True,
)