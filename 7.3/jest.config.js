module.exports = {
  roots: ["<rootDir>/jest"],
  testMatch: ["**/test/unit/**/*.test.js"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/playwright/**",
    "!**/user.js"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
