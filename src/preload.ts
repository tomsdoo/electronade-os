import { ipcRenderer } from "electron";

export const preloadObject = {
  os: {
    homedir: () => ipcRenderer.invoke("electronade-os:homedir"),
    tmpdir: () => ipcRenderer.invoke("electronade-os:tmpdir")
  }
};
