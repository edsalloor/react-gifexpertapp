module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  moduleDirectories: ['node_modules', 'src']
};
