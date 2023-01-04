# electronade-os

electronade-os is an npm package that provides the feature about os for electronade.  
See [electronade page](https://electronade.netlify.app/) for the structures of `electronade packages`.

![npm](https://img.shields.io/npm/v/electronade-os)
![NPM](https://img.shields.io/npm/l/electronade-os)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-os)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-os)
![Maintenance](https://img.shields.io/maintenance/yes/2023)

## install

``` shell
npm install electronade-os
```

## exposed

``` typescript
electronade: {
  os: {
    homedir: () => Promise<string>;
    platform: () => Promise<string>;
    tmpdir: () => Promise<string>;
  }
}
```

## usage
``` javascript
console.log(
  await electronade.os.homedir()
);
```

``` javascript
console.log(
  await electronade.os.platform()
);
```

``` javascript
console.log(
  await electronade.os.tmpdir()
);
```
