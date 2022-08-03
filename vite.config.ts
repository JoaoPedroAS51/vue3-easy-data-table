import { resolve } from 'path';

/* eslint-disable import/no-extraneous-dependencies */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
/* eslint-enable import/no-extraneous-dependencies */

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue3-easy-data-table',
      fileName: (format) => `vue3-easy-data-table.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      treeshake: true,
      output: [
        {
          format: 'umd',
          // Provide global variables to use in the UMD build
          // for externalized deps
          exports: 'named',
          globals: { vue: 'Vue' },
        },
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
        },
      ],
    },
  },
  plugins: [
    dts({
      staticImport: true,
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts', 'types/**/*.ts'],
    }),
    vue(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, 'src')}/$1`,
      },
      // #/xxxx => types/xxxx
      {
        find: /^#\/(.+)/,
        replacement: `${resolve(__dirname, 'types')}/$1`,
      },
    ],
  },
});
