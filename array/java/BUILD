load("@rules_java//java:defs.bzl", "java_library", "java_binary", "java_test")

package(default_visibility = ["//visibility:public"])

java_library(
    name = "array_java_lib",
    srcs = glob(["src/main/java/com/example/ds/**/*.java"]),
    resources = glob(["src/main/resources/**"]),
    deps = [],
)

java_binary(
    name = "array_java",
    main_class = "com.example.App",
    runtime_deps = [":array_java_lib"],
)

java_test(
    name = "array_java_test",
    srcs = glob(["src/test/java/com/example/ds/**/*.java"]),
    test_class = "com.example.ds.DynamicArrayTest",
    deps = [
        "//:java_test_deps",
        ":array_java_lib",
    ],
)