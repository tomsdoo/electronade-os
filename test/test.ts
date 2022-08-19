import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles } from "../src/handles";
import { homedir, tmpdir } from "os";

describe("handles", () => {
  it("electronade-os:homedir eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) =>
          eventName === "electronade-os:homedir"
      )
    );
  });

  it("electonade-os:homedir handler", () => {
    assert.equal(
      (handles.find(
        ({ eventName }) =>
          eventName === "electronade-os:homedir"
      ) as { handler: Function })
        .handler(),
      homedir()
    )
  });

  it("electronade-os:tmpdir eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) =>
          eventName === "electronade-os:tmpdir"
      )
    );
  });

  it("electronade-os:tmpdir handler", () => {
    assert.equal(
      (handles.find(
        ({ eventName }) =>
          eventName === "electronade-os:tmpdir"
      ) as { handler: Function })
        .handler(),
      tmpdir()
    );
  });
});
