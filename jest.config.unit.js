module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["jest-enzyme"],
  setupFiles: ['<rootDir>/src/setupEnzyme.ts'],
  // ignore .js files
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[t]sx?$',
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};
