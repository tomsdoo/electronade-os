export { handles } from "./handles";
// eslint-disable-next-line
const { ipcRenderer } = require("electron");

export const preloadObject = {
  os: {
    homedir: async () => await ipcRenderer.invoke("electronade-os:homedir"),
    platform: async () => await ipcRenderer.invoke("electronade-os:platform"),
    tmpdir: async () => await ipcRenderer.invoke("electronade-os:tmpdir"),
  },
};
