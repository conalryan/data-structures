load("@rules_java//java:defs.bzl", "java_library", "java_binary", "java_test")

package(default_visibility = ["//visibility:public"])

java_library(
    name = "lib",
    srcs = glob(["src/main/java/com/example/ds/**/*.java"]),
    resources = glob(["src/main/resources/**"]),
    deps = [],
)

java_binary(
    name = "bin",
    srcs = glob(["src/main/java/com/example/App.java"]),
    main_class = "com.example.App",
    runtime_deps = [":lib"],
)

java_test(
    name = "da_test",
    srcs = glob(["src/test/java/com/example/ds/**/*.java"]),
    test_class = "com.example.ds.DynamicArrayTest",
    deps = [
        "//:java_test_deps",
        ":lib",
    ],
)

java_test(
    name = "sb_test",
    srcs = glob(["src/test/java/com/example/ds/**/*.java"]),
    test_class = "com.example.ds.StrBuilderTest",
    deps = [
        "//:java_test_deps",
        ":lib",
    ],
)