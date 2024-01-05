# eslint-config-rchl-typescript

Typescript eslint rules.

## Installation

1. First install either `eslint-config-rchl-base` or `eslint-config-rchl-vue`:
2. Run

```sh
npm i -D eslint-config-rchl-typescript typescript
```

3. Create `.eslintrc.js` configuration file in the root directory of your project.

```js
module.exports = {
    extends: [
        'eslint-config-rchl-vue',  // or 'eslint-config-rchl-base'
        'eslint-config-rchl-typescript',
    ],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
    ],
};
```

NOTE: When using typescript rules, eslint configuration *must* be located in a `.eslintrc.js` file since it's necessary to use `__dirname` constant which can't be used in JSON or Yaml context.
