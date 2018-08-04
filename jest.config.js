module.exports = {
  verbose: true,
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./src/testUtils/configure.js'],
  testURL: 'http://localhost/',
};
