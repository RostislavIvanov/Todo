export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.svg$": "<rootDir>/svgTransform.cjs"
    },
    moduleNameMapper: {
        "^~/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    }
}
