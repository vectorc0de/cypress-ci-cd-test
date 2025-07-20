// cypress.config.js
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react', // 'vue', 'angular', etc.
      bundler: 'vite',    // o 'webpack'
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
});