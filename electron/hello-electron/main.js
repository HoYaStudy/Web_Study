const electron = require("electron");
// const path = require("path");
// const url = require("url");

const app = electron.app;
// const ipc = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
// const Menu = electron.Menu;
// const MenuItem = electron.MenuItem;
// const globalShortcut = electron.globalShortcut;
// const Tray = electron.Tray;
// const dialog = electron.dialog;

// const iconPath = path.join(__dirname, "logo.png");
// let tray = null;

let win;
// let childWin;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win = new BrowserWindow({
  //   width: 400,
  //   height: 300,
  //   maxWidth: 800,
  //   maxHeight: 600,
  // });
  // win = new BrowserWindow({ backgroundColor: "#00ACC1" });
  // win = new BrowserWindow({ frame: false });
  // win = new BrowserWindow({ title: "Parent" });

  // childWin = new BrowserWindow({ parent: win, title: 'Child' });
  // childWin = new BrowserWindow({ parent: win, modal: true, title: "Child" });
  // childWin = new BrowserWindow({
  //   show: false,
  //   parent: win,
  //   modal: true,
  //   title: "Child",
  // });
  // childWin.loadURL("https://github.com");
  // childWin.once("ready-to-show", () => {
  //   childWin.show();
  // });

  win.loadURL(`file://${__dirname}/index.html`);
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"),
  //     protocol: "file",
  //     slashes: true,
  //   })
  // );

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// ipc.on("renderer_async", (event) => {
//   console.log("test");
//   dialog.showErrorBox("IPC Async", "Message triggered by Renderer");
//   event.sender.send("main_async", "Message triggered by Main");
// });

// ipc.on("renderer_sync", (event) => {
//   event.returnValue = "main_sync";
// });

app.on("ready", createWindow);
// app.on("ready", () => {
//   createWindow();
//   const template = [
//     {
//       label: "built-in",
//       submenu: [
//         { role: "undo" },
//         { role: "redo" },
//         { type: "separator" },
//         { role: "cut" },
//         { role: "copy" },
//         { role: "paste" },
//         { role: "pasteandmatchstyle" },
//         { role: "delete" },
//         { role: "selectall" },
//       ],
//     },
//     {
//       label: "menu1",
//       submenu: [
//         {
//           label: "submenu1",
//           accelerator: "ctrl+1",
//           click: () => {
//             console.log("Clicked submenu1");
//           },
//         },
//         {
//           type: "separator",
//         },
//         {
//           label: "submenu2",
//           accelerator: "ctrl+2",
//           click: () => {
//             console.log("Clicked submenu2");
//           },
//         },
//       ],
//     },
//     {
//       label: "menu2",
//       click: () => {
//         electron.shell.openExternal("http://electronjs.org");
//       },
//     },
//   ];
//   const menu = Menu.buildFromTemplate(template);
//   Menu.setApplicationMenu(menu);
// });
// app.on("ready", () => {
//   createWindow();
//   const ctxMenu = new Menu();
//   ctxMenu.append(
//     new MenuItem({
//       label: "menu1",
//       click: () => {
//         console.log("Clicked context menu1");
//       },
//     })
//   );
//   ctxMenu.append(new MenuItem({ role: "selectall" }));
//   win.webContents.on("context-menu", (e, params) => {
//     ctxMenu.popup(win, params.x, params.y);
//   });
// });
// app.on("ready", () => {
//   createWindow();
//   globalShortcut.register("alt+1", () => {
//     console.log("Global shortcut works well");
//   });
// });
// app.on("ready", () => {
//   tray = new Tray(iconPath);
//   const template = [
//     {
//       label: "menu1",
//       submenu: [
//         { label: "submenu1", type: "radio", checked: true },
//         { label: "submenu2", type: "radio" },
//       ],
//     },
//     {
//       label: "menu2",
//       submenu: [
//         { label: "submenu1", type: "radio", checked: true },
//         { label: "submenu2", type: "radio" },
//       ],
//     },
//   ];
//   const ctxMenu = Menu.buildFromTemplate(template);
//   tray.setContextMenu(ctxMenu);
//   tray.setToolTip("Test Tray");
// });

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// app.on("will-quit", () => {
//   globalShortcut.unregisterAll();
// });
