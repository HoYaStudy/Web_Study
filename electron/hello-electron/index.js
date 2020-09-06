// const electron = require("electron");

// const ipc = electron.ipcRenderer;
// const shell = electron.shell;

// const asyncBtn = document.getElementById("asyncBtn");
// const syncBtn = document.getElementById("syncBtn");
// const openBtn = document.getElementById("openBtn");

// asyncBtn.addEventListener("click", () => {
//   console.log(`async 1`);
//   ipc.send("renderer_async");
//   console.log(`async 2`);
// });

// syncBtn.addEventListener("click", () => {
//   console.log(`sync 1`);
//   const ret = ipc.sendSync("renderer_sync");
//   console.log(ret);
//   console.log(`sync 2`);
// });

// ipc.on("main_async", (event, arg) => {
//   console.log(arg);
// });

// openBtn.addEventListener("click", (event) => {
//   shell.showItemInFolder("C:\\test.txt");
//   shell.openPath("C:\\test.txt");
// });
