module.exports = {
    extends: [
        './packages/base',
        './packages/typescript',
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
