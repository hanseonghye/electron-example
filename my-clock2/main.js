import { app, BrowserWindow } from 'electron';
import moment from 'moment';

if (require('electron-squirrel-startup')) {
  app.quit()
}

let win = null


const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(`file://${__dirname}/app/index.html`)
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}


app.on('ready', () => {
  setTimeout(createWindow, 500)
  const secondsToTime = (s) => {
    let momentTime = moment.duration(s, 'seconds')
    let sec = momentTime.seconds() < 10 ? ('0' + momentTime.seconds()) : momentTime.seconds();
    let min = momentTime.minutes() < 10 ? ('0' + momentTime.minutes()) : momentTime.minutes();
    return `${min}:${sec}`;
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})