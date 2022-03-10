import { mergeConfig } from 'vite';
import baseConfig from '../../vitest.config';
import nxextBaseConfig from '@nxext/vite/plugins/vite';
import nxextAngularConfig from '@nxext/angular/plugins/vite';

export default mergeConfig(baseConfig, mergeConfig(nxextBaseConfig, nxextAngularConfig))
