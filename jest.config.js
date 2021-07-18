module.exports = {
    "preset": "@shelf/jest-dynamodb",
    testMatch: ["**/*.spec.ts"],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/modules/**/useCases/**/*.ts"],
    coverageDirectory: "coverage",    
    coverageProvider: "v8",
    coverageReporters: ["text-summary", "lcov"],
    preset: "ts-jest",
    testEnvironment: "node",
};