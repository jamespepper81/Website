import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    // Exclude Playwright tests from vitest
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/tests/**/*.spec.ts', // Exclude Playwright test files
    ],
    // Include only unit test files in src
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
