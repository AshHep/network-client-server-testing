const {ipcRenderer} = require("electron");

let gState;

ipcRenderer.on("updateState", (event, data) => {

    console.log(data);

});