const { ipcRenderer } = require("electron");
const { homedir, tmpdir } = require("os");

const packageName = "electronade-os";
const Events = {
  HOMEDIR: `${packageName}:homedir`,
  TMPDIR: `${packageName}:tmpdir`
};

exports.handles = [
  {
    eventName: Events.HOMEDIR,
    handler: (event: any) => homedir()
  },
  {
    eventName: Events.TMPDIR,
    handler: (event: any) => tmpdir()
  }
];

exports.preloadObject = {
  os: {
    homedir: () => ipcRenderer.invoke("electronade-os:homedir"),
    tmpdir: () => ipcRenderer.invoke("electronade-os:tmpdir")
  }
};
