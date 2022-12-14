import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: async (eventName: string) => await Promise.resolve(eventName),
};

const handleDictionary = Object.fromEntries(
  handles.map(({ eventName, handler }) => [eventName, handler])
);

describe("preloadObject to handles", () => {
  it("preloadObject.os.homedir()", async () => {
    assert(
      // eslint-disable-next-line no-eval
      (await eval(preloadObject.os.homedir.toString())()) in handleDictionary
    );
  });

  it("preloadObject.os.platform()", async () => {
    assert(
      // eslint-disable-next-line no-eval
      (await eval(preloadObject.os.platform.toString())()) in handleDictionary
    );
  });

  it("preloadObject.os.tmpdir()", async () => {
    assert(
      // eslint-disable-next-line no-eval
      (await eval(preloadObject.os.tmpdir.toString())()) in handleDictionary
    );
  });
});
