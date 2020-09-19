

const { resolve } = require('path')
let { app, BrowserWindow } = require('electron')

let win = null

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const URL = process.env.NODE_ENV === 'development'
    ? `http://localhost:8090` // vite 启动的服务器地址
    : `file://${resolve(__dirname, '../../dist/electron/index.html')}` // vite 构建后的静态文件地址

  win.loadURL(URL)
}

app.on('ready', () => {
  createWin();
  win.on('closed', () => {
    win = null
  })
})

