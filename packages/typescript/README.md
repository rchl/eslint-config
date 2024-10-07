# eslint-config-rchl-typescript

Typescript eslint rules.

## Installation

1. Install `eslint-config-rchl-base`, `eslint-config-rchl-typescript` and `typescript` (if not installed already):

```sh
npm i -D eslint-config-rchl-base eslint-config-rchl-typescript typescript
```

2. Optionally install `eslint-config-rchl-vue`.
3. Create `eslint.config.mjs` file in the root of the repo:

```js
import base from 'eslint-config-rchl-base';
import typescript from 'eslint-config-rchl-typescript';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...base,
    ...typescript,
];
```
