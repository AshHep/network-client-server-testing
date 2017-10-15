/*const {ipcRenderer} = require("electron");

let gState;

ipcRenderer.on("pConnect", function(event, data) {
    
    gState = data;
    console.log(gState);

});
*/

const {ipcRenderer} = require("electron");

ipcRenderer.on("updateState", (event, data) => {

    console.log("state update...");

});