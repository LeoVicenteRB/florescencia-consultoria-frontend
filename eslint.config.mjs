import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const compat=new FlatCompat({baseDirectory:path.dirname(fileURLToPath(import.meta.url))});
const config=[
  {ignores:['.next/**','next-env.d.ts','node_modules/**','coverage/**','playwright-report/**']},
  ...compat.extends('next/core-web-vitals','next/typescript'),
  {linterOptions:{reportUnusedDisableDirectives:false},rules:{'@typescript-eslint/no-explicit-any':'off','react-hooks/exhaustive-deps':'off'}}
];
export default config;
