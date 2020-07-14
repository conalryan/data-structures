package(default_visibility=["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@npm_bazel_jasmine//:index.bzl", "jasmine_node_test")

ts_library(
    name = "lib",
    srcs = glob(["src/*.ts"]),
    deps = ["@npm//@types/jasmine"],
)

jasmine_node_test(
    name = "ll_test",
    srcs = [
        "src/linked-list.spec.ts",
    ],
    deps = [
        "@npm//@types/jasmine",
        "@npm//jasmine",
        "@npm//jasmine-core",
        ":lib",
    ],
)
