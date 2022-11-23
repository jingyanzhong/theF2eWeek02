import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/theF2eWeek02',
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.js'), // 設定入口檔案
      name: 'dist', // 起個名字，安裝、引入用
      fileName: (format) => `nf-tool.${format}.js` // 打包後的檔名
    },
    sourcemap: true, // 輸出.map檔案
    rollupOptions: {
      // 確保外部化處理那些你不想打包進庫的依賴
      external: ['vue'],
      output: {
        // 在 UMD 構建模式下為這些外部化的依賴提供一個全域性變數
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
