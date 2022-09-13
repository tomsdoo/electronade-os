import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { preloadObject } from "../src/";
import { mock } from "sinon";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: () => Promise.resolve(undefined),
};

describe("preloadObject", () => {
  it("preloadObject.os exists", () => {
    assert(preloadObject.os);
  });

  it("preloadObject.os.homedir exists", () => {
    assert(preloadObject.os.homedir);
  });

  it("preloadObject.os.homedir calling", async () => {
    const mocked = mock(ipcRenderer);
    const mockedValue = "mocked value";
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-os:homedir")
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      await eval(preloadObject.os.homedir.toString())()
    );
    mocked.verify();
    mocked.restore();
  });

  it("preloadObject.os.platform exists", () => {
    assert(preloadObject.os.platform);
  });

  it("preloadObject.os.platform calling", async () => {
    const mocked = mock(ipcRenderer);
    const mockedValue = "mocked platform";
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-os:platform")
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      await eval(preloadObject.os.platform.toString())()
    );
    mocked.verify();
    mocked.restore();
  });

  it("preloadObject.os.tmpdir existss", () => {
    assert(preloadObject.os.tmpdir);
  });

  it("preloadObject.os.tmpdir calling", async () => {
    const mocked = mock(ipcRenderer);
    const mockedValue = "mocked value";
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-os:tmpdir")
      .returns(Promise.resolve(mockedValue));

    assert.equal(mockedValue, await eval(preloadObject.os.tmpdir.toString())());
    mocked.verify();
    mocked.restore();
  });
});
