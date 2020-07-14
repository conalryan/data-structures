load("@rules_java//java:defs.bzl", "java_library", "java_binary", "java_test")

package(default_visibility = ["//visibility:public"])

java_library(
    name = "lib",
    srcs = glob(["src/main/java/com/example/ds/**/*.java"]),
    resources = glob(["src/main/resources/**"]),
    deps = [],
)

java_test(
    name = "test",
    srcs = glob(["src/test/java/com/example/ds/**/*.java"]),
    test_class = "com.example.ds.HashTableTest",
    deps = [
        "//:java_test_deps",
        ":lib",
    ],
)