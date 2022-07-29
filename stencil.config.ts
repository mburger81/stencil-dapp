import { Config } from '@stencil/core';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  // THIS DOESN'T WORKs
  // nodeResolve: {
  //   browser: true,
  //   preferBuiltins: true
  // },
  rollupPlugins: {
    before: [
      nodeResolve(
        {
          browser: true,
          preferBuiltins: true
        }
      )
    ],
    after: [
      nodePolyfills(),
    ]
  }
};
