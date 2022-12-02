const { app, BrowserWindow } = require('electron');
require('@electron/remote/main').initialize();


// Set env
process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;

let mainWIndow;

const createMainWindow = () => {
  mainWIndow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true
    }
  })
  mainWIndow.loadURL('http://localhost:3000');
  // mainWIndow.loadFile('');
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})