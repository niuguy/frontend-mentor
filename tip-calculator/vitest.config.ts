/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for testing React components
    globals: true, // Enable global variables like describe, it, expect
  },
});
