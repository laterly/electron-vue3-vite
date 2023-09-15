const { join } = require("path");
let { app, BrowserWindow } = require("electron");
const env = process.env.NODE_ENV === "development";
process.env.DIST_ELECTRON = join(__dirname, '../..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist/electron')
let win = null;
let loadWin = null;
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1094,
    height: 791,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const url = "http://127.0.0.1:8090";
  const indexHtml = join(process.env.DIST, "index.html");

  // win.loadURL(URL)

  if (env) {
    // electron-vite-vue#298
    win.loadURL(url);
    // Open devTool if the app is not packaged
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  win.webContents.once("dom-ready", () => {
    win.show();
  });
  loadWin.destroy();

  // if (env) win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

function createLoadWin() {
  loadWin = new BrowserWindow({
    width: 1094,
    height: 791,
    backgroundColor: "#222",
    transparent: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: { experimentalFeatures: true },
  });
  const loadURL = `file://${join(
    __dirname,
    "../../dist/electron/static/load/index.html"
  )}`;

  loadWin.loadURL(loadURL);

  loadWin.show();

  setTimeout(() => {
    createWin();
  }, 3500);

  loadWin.on("closed", () => {
    loadWin = null;
  });
}

app.isReady()
  ? createLoadWin()
  : app.on("ready", () => {
      createLoadWin();
    });
