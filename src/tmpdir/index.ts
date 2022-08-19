import { tmpdir } from "os";

export const handle = {
  eventName: "electronade-os:tmpdir",
  handler: () => tmpdir()
};
