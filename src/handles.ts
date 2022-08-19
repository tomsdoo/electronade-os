import { homedir, tmpdir } from "os";

export const handles = [
  {
    eventName: "electronade-os:homedir",
    handler: () => homedir()
  },
  {
    eventName: "electronade-os:tmpdir",
    handler: () => tmpdir()
  }
];
