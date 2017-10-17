const electron      = require("electron");
const BrowserWindow = electron.BrowserWindow;
const ipc           = electron.ipcMain;
const app           = electron.app;
const io            = require("socket.io-client");

let win;
let socket = io("http://localhost:3000");

app.on("ready", () => {

    win = new BrowserWindow({x: -1000, y: 50});
    win.loadURL("file://" + __dirname + "/index.html"); 

});

app.on("web-contents-created", () => {

    socket.emit("fetchState");    

});

socket.on("updateState", (event, data) => {

    console.log(event);
    console.log(data);

    win.webContents.send("updateState", data);

});