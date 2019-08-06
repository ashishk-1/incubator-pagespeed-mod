licenses(["notice"])  # Apache 2

genrule(
  name = 'compiler_script',
  tools = ["download.sh"],
  outs  = ["compiler"],
  cmd  = ('./$(location download.sh) $@'),
)

cc_library(
    name = "download_closure",
    data = [":compiler_script"],
    visibility = ["//visibility:public"],
)