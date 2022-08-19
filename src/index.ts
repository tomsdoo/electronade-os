import { handle as homedirHandle } from "./homedir";
import { handle as tmpdirHandle } from "./tmpdir";

export { preloadObject } from "./preload";

export const handles = [
  homedirHandle,
  tmpdirHandle
];
