import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [icon()]
});