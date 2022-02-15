export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 80,
      functions: 70,
      lines: 80
    }
  }
};
