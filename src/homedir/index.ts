import { homedir } from "os";

export const handle = {
  eventName: "electronade-os:homedir",
  handler: () => homedir()
};
