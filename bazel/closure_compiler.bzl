closure_library_rules = """
sh_library(
    name = "runfiles",
    srcs = [],
    visibility = ["//visibility:public"],
)
"""

def closure_compiler_gen(name, srcs=[], js_dir=[],js_includes=[],entry_points=[], externs=[],opt=True):

    native.genrule(
            name =  name,
            srcs = ["@closure_library//:runfiles"],
            outs = ["opt_critical_images_beacon.js"],
        #     cmd  = "java -jar $(location //third_party/closure:compiler_script)/compiler.jar  --js /home/ashish/project/apache-pagespeed/incubator-pagespeed-mod/net/instaweb/rewriter/critical_images_beacon.js /home/ashish/project/apache-pagespeed/incubator-pagespeed-mod/net/instaweb/js/js_utils.js --js_output_file $@ --compilation_level=ADVANCED --entry_point goog:pagespeed.CriticalImages --dependency_mode STRICT --warning_level VERBOSE --generate_exports --output_wrapper=\"(function(){%output%})();\"" + " $$(cat $(location @closure_library//:file_list_script))",
            cmd  = "java -jar $(location //third_party/closure:compiler_script)/compiler.jar  --js /home/ashish/project/apache-pagespeed/incubator-pagespeed-mod/net/instaweb/rewriter/critical_images_beacon.js /home/ashish/project/apache-pagespeed/incubator-pagespeed-mod/net/instaweb/js/js_utils.js --js_output_file $@ --compilation_level=ADVANCED --entry_point goog:pagespeed.CriticalImages --dependency_mode STRICT --warning_level VERBOSE --generate_exports --output_wrapper=\"(function(){%output%})();\"" + " $$(find ../../../../../external/closure_library/closure ../../../../../external/closure_library/third_party -type f -name \"*.js\"| grep -v _test.js | sort | sed \"s/^/--js /\")",
            tools=[
                    "//third_party/closure:compiler_script",
            ],
    )