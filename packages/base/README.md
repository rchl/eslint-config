# eslint-config-rchl-base

Common base eslint rules.

## Installation

```sh
npm i -D eslint-config-rchl-base eslint
```

## Usage

Create `eslint.config.mjs` file in the root of the repo:

```js
import base from 'eslint-config-rchl-base';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...base,
];
```
