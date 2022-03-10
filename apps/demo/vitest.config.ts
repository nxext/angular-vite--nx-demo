import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vitest.config';
import nxextBaseConfig from '@nxext/vite/plugins/vite';
import nxextAngularConfig from '@nxext/angular/plugins/vite';

const projectBase = mergeConfig(baseConfig, mergeConfig(nxextBaseConfig, nxextAngularConfig))

export default mergeConfig(projectBase, defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
  },
}))
