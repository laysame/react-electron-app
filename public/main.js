// main.js
// Modules to control application life and create native browser window
const {app, BrowserWindow, Notification } = require('electron')
const {join} = require("path");

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
        }
    })

    const secondaryWindow = new BrowserWindow({
        width: 1024, // Set the width of the second window
        height: 768, // Set the height of the second window
    });

    // and load the localhost
    //mainWindow.loadURL('http://localhost:3000')
    secondaryWindow.loadURL('http://localhost:3000')
}



function showNotification() {
    new Notification({ title: 'Welcome to HAVS Calculator', body: 'Enter your tools and times below to find out the vibration exposure' }).show()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow).then(showNotification);

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') app.quit()
})
