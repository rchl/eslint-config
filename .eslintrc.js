module.exports = {
    extends: [
        './packages/base',
        './packages/typescript',
        './packages/vue',
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
