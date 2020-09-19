import { resolve } from 'path'

const root = resolve(__dirname, 'src/render')
const outDir = resolve(__dirname, 'dist/electron')
export default {
  root,
  base: './',
  outDir,
  alias: {
    // 别名必须以 / 开头、结尾
    '/@/': root,
  },
}
