import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'happy-dom',
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        lines: 20,
        branches: 20,
        functions: 20,
        statements: 20,
      },
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['**/*.test.{ts,tsx}'],
        },
      },
    ],
    setupFiles: './setup-tests.ts',
    globals: true,
  },
});
