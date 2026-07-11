import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  base: '/globe-chart-demo-vue/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('globe-'),
        },
      },
    }),
    {
      name: 'copy-countries-json',
      apply: 'build' as const,
      closeBundle() {
        mkdirSync(resolve('dist/assets'), { recursive: true })
        copyFileSync(
          resolve('node_modules/globe-chart/dist/ne_110m_admin_0_countries.json'),
          resolve('dist/assets/ne_110m_admin_0_countries.json'),
        )
      },
    },
  ],
  resolve: {
    alias: {
      'three/webgpu': 'globe-chart/stubs/three-webgpu.js',
      'three/tsl': 'globe-chart/stubs/three-tsl.js',
      'h3-js': 'globe-chart/stubs/h3-js.js',
    },
  },
})
