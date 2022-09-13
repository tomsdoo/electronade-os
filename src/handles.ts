import { homedir, platform, tmpdir } from "os";

export const handles = [
  {
    eventName: "electronade-os:homedir",
    handler: () => homedir(),
  },
  {
    eventName: "electronade-os:platform",
    handler: () => platform(),
  },
  {
    eventName: "electronade-os:tmpdir",
    handler: () => tmpdir(),
  },
];
