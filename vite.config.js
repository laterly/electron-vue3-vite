import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const root = resolve(__dirname, 'src/render')
const outDir = resolve(__dirname, 'dist/electron')
// https://vitejs.dev/config/
export default defineConfig(() => {

  return {
    root,
    base: './',
    outDir,
    resolve:{
      alias: {
        // 别名必须以 / 开头、结尾
        '@': root,
      },
    },
    plugins: [
      vue(),
    ],
    server: (() => {
      return {
        host: '127.0.0.1',
        port: '8090',
      }
    })(),
    clearScreen: false,
  }
})
