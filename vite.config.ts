import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import eslint from '@rollup/plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            { displayName: true, fileName: true },
          ],
        ],
      },
    }),
    svgr(),
    { ...eslint(), enforce: 'pre', apply: 'build' },
  ],
});
