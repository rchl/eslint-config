# eslint-configs

Monorepo with eslint configurations.

## How to use

Create eslint configuration file that uses one or more of those configs. For example create `eslint.config.mjs` at the root of the repo with:

```js
import { defineConfig } from "eslint/config";
import base from 'eslint-config-rchl-base';
import vue from 'eslint-config-rchl-vue';
import typescript from 'eslint-config-rchl-typescript';

export default defineConfig([
  ...base,
  ...vue,
  ...typescript,
]);
```

## Contributing

Install dependencies:

```sh
pnpm i
```

To lint all packages run:

```sh
pnpm -r run lint
```

## Publishing

1. Make changes in individual packages and bump versions with `pnpm version <patch|minor|major>` in each package directory.
2. Run `pnpm run release` to publish all packages.
