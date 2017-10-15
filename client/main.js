const electron      = require("electron");
const BrowserWindow = electron.BrowserWindow;
const ipc           = electron.ipcMain;
const app           = electron.app;
const io            = require("socket.io-client");

let win;
let socket = io("http://localhost:3000");

app.on("ready", () => {

    win = new BrowserWindow();
    win.loadURL("file://" + __dirname + "/index.html");
    
            

}).then(socket.emit("fetchState", "derp", "derp"));

socket.on("updateState", (event, data) => {

    console.log(event);
    console.log(data);

    win.webContents.send("updateState", event, data);

});