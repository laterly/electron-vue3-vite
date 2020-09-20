import { resolve } from 'path'

const root = resolve(__dirname, 'src/render')
const outDir = resolve(__dirname, 'dist/electron')
export default {
  port:8090,
  root,
  base: './',
  outDir,
  alias: {
    // 别名必须以 / 开头、结尾
    '/@/': root,
  },
  optimizeDeps: {
    // 这里不加也没事，用 require 的形式就能避开 import 被编译成 /@modules/fs?import
    // allowNodeBuiltins: ['electron-is-dev', 'electron-store', 'electron']
  },
}
