def closure_compiler_gen(name, js_dir=[],srcs=[],js_includes=[],entry_points=[], externs=[],opt=True):
    print("name ",name)
    print("js_dir ",js_dir)
    print("srcs ",srcs)
    print("js_includes ",js_includes)
    print("entry_points ",entry_points)
    print("externs ",externs)
    print("opt ",opt)

    native.genrule(
            name =  "compiled_" + name+("_opt.js" if opt else "_dbg.js"),
            srcs = srcs,
            outs = [name],
            cmd = ""
        )
      

