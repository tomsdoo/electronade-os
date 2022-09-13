import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve(eventName),
};

const handleDictionary = Object.fromEntries(
  handles.map(({ eventName, handler }) => [eventName, handler])
);

describe("preloadObject to handles", () => {
  it("preloadObject.os.homedir()", async () => {
    assert(
      (await eval(preloadObject.os.homedir.toString())()) in handleDictionary
    );
  });

  it("preloadObject.os.platform()", async () => {
    assert(
      (await eval(preloadObject.os.platform.toString())()) in handleDictionary
    );
  });

  it("preloadObject.os.tmpdir()", async () => {
    assert(
      (await eval(preloadObject.os.tmpdir.toString())()) in handleDictionary
    );
  });
});
