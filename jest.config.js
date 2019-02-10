const coverageReporters = ['lcov'];
const reporters = ['default'];
let collectCoverage = false;

// TF_BUILD is available in pipeline build environment
// https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops
// if ('TF_BUILD' in process.env) {
  coverageReporters.push('cobertura');
  reporters.push('jest-junit');
  collectCoverage = true;
// }

module.exports = {
  collectCoverage,
  collectCoverageFrom: [
    '**/*.ts',
    '!tests/',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  coverageReporters,
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: './tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'js',
    'json',
    'node',
    'ts',
  ],
  preset: 'ts-jest',
  reporters,
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)(spec|test).ts?(x)',
  ],
};