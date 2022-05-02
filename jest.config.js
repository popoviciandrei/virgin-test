// Sync object
const { defaults } = require('jest-config');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  roots: ['<rootDir>/lib', '<rootDir>/components', '<rootDir>/pages'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', 'public', 'coverage'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
};

module.exports = config;
