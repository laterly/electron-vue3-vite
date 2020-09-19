

const { resolve } = require('path')
let { app, BrowserWindow } = require('electron')

let win = null
let loadWin =null
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1094,
    height: 791,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const URL = process.env.NODE_ENV === 'development'
    ? `http://localhost:8090` // vite 启动的服务器地址
    : `file://${resolve(__dirname, './dist/electron/index.html')}` // vite 构建后的静态文件地址

  win.loadURL(URL)

  win.webContents.once('dom-ready', () => {
    win.show()
  })
  loadWin.destroy()

  // if (process.env.NODE_ENV === 'development') win.webContents.openDevTools(true)

  win.on('closed', () => {
    win = null
  })
}

function createLoadWin () {
  loadWin = new BrowserWindow({
    width: 1094,
    height: 791,
    backgroundColor: '#222',
    transparent: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: { experimentalFeatures: true }
  })
  const loadURL = process.env.NODE_ENV === 'development' ? `http://localhost:8090/#load` : `file://${resolve(__dirname, './dist/electron/static/load/index.html')}`
  
  loadWin.loadURL(loadURL)

  loadWin.show()

  setTimeout(() => {
    createWin()
  }, 5000)

  loadWin.on('closed', () => {
    loadWin = null
  })
}

app.isReady() ? createLoadWin() : app.on('ready', ()=>{
  createLoadWin()
})

