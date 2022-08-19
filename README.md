# electronade-os

It's a package for electronade that provides some feature of Node.js os class.

# Installation
``` shell
npm install electronade-os
```

# Usage
See electronade usage for details.

``` javascript
console.log(
  await electronade.os.homedir()
); // same as homedir()

console.log(
  await electronade.os.platform()
); // same as platform()

console.log(
  await electronade.os.tmpdir()
); // same as tmpdir()
```
