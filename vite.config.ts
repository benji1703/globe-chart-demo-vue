import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/globe-chart-demo-vue/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('globe-'),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      'three/webgpu': 'globe-chart/stubs/three-webgpu.js',
      'three/tsl': 'globe-chart/stubs/three-tsl.js',
      'h3-js': 'globe-chart/stubs/h3-js.js',
    },
  },
})
