# eslint-config-rchl-vue

## Installation

```sh
npm i -D eslint-config-rchl-vue eslint
```

## Usage

Create `eslint.config.mjs` file in the root of the repo:

```js
import base from 'eslint-config-rchl-base';
import vue from 'eslint-config-rchl-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...base,
    ...vue,
];
```
