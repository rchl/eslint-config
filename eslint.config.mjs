import { defineConfig } from "eslint/config";
import base from 'eslint-config-rchl-base';
import vue from 'eslint-config-rchl-vue';
import typescript from 'eslint-config-rchl-typescript';

export default defineConfig([
  ...base,
  ...vue,
  ...typescript,
]);
