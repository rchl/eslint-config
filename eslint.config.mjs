import base from 'eslint-config-rchl-base';
import vue from 'eslint-config-rchl-vue';
import typescript from 'eslint-config-rchl-typescript';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...base,
    ...vue,
    ...typescript,
];
