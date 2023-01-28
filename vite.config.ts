import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, 'src/'),
      assets: resolve(__dirname, 'src/assets/'),
      common: resolve(__dirname, 'src/common/'),
      components: resolve(__dirname, 'src/components/'),
      features: resolve(__dirname, 'src/features/'),
    },
  },

  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
  ],
});
