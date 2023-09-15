import path from "path";
import { app, BrowserWindow } from "electron";
const env = process.env.NODE_ENV === "development";
let win: any = null;
let loadWin: any = null;
function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1094,
    height: 791,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (env) {
    win.loadURL(`http://localhost:8090`);
  } else {
    win.loadFile(path.join("dist", "index.html"));
  }

  win.webContents.once("dom-ready", () => {
    win?.show();
  });
  loadWin.destroy();

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

  loadWin.loadFile(path.join("dist", "static/load/index.html"));

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
