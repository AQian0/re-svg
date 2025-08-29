import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'node',
    dts: true,
    format: 'esm',
    banner: '#!/usr/bin/env node',
  },
])
