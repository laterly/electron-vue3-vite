

const { join } = require('path')
let { app, BrowserWindow } = require('electron')
const env = process.env.NODE_ENV === 'development'
let win = null
let loadWin = null
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1094,
    height: 791,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const URL = env
    ? `http://localhost:8090` // vite 启动的服务器地址
    : `file://${join(__dirname, '../../dist/electron/index.html')}` // vite 构建后的静态文件地址

  console.log('URL', URL);

  win.loadURL(URL)

  win.webContents.once('dom-ready', () => {
    win.show()
  })
  loadWin.destroy()

  // if (env) win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

function createLoadWin() {
  loadWin = new BrowserWindow({
    width: 1094,
    height: 791,
    backgroundColor: '#222',
    transparent: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: { experimentalFeatures: true }
  })
  const loadURL = `file://${join(__dirname, '../../dist/electron/static/load/index.html')}` 

  loadWin.loadURL(loadURL)

  loadWin.show()

  setTimeout(() => {
    createWin()
  }, 3500)

  loadWin.on('closed', () => {
    loadWin = null
  })
}

app.isReady() ? createLoadWin() : app.on('ready', () => {
  createLoadWin()
})

