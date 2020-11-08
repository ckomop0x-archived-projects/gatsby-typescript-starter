module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/jest-preprocess.js',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@shared/(.*)': '<rootDir>/src/components/shared/$1',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    // __PATH_PREFIX__: ``,
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/__generated__/**',
    '!**/*.module.scss.d.ts',
    '!**/vendor/**',
    '!**/mocks/**',
    '!**/.cache/**',
    '!**/public/**',
  ],
};
