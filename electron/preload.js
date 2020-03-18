// This code runs before the Main Window starts and allows
// to send electron objects (such as ipcRenderer) to the
// renderer process.
const { ipcRenderer } = require("electron");
window.ipcRenderer = ipcRenderer;

// If you are building a hybrid app (works in browser and
// electron), you can check if window.ipcRenderer exists
// to know if the user is in a browser or in electron.
