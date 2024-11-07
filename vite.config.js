import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: false }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_GOOGLE_SEARCH_CONSOLE_KEY:
            process.env.VITE_GOOGLE_SEARCH_CONSOLE_KEY,
          VITE_GOOGLE_ANALYTICS_KEY: process.env.VITE_GOOGLE_ANALYTICS_KEY,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
