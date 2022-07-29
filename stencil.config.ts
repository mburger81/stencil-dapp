import { Config } from '@stencil/core';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// import nodePolyfills from 'rollup-plugin-node-polyfills'; // ionic-team
import nodePolyfills from 'rollup-plugin-polyfill-node';


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
  sourceMap: true,
  // THIS DOESN'T WORKs
  // nodeResolve: {
  //   browser: true,
  //   preferBuiltins: true
  // },
  rollupPlugins: {
    before: [
      alias({
        entries: [
          { find: 'process', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'path', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'util', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'buffer', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'crypto', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'http', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'https', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'os', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'url', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'assert', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'events', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'string_decoder/', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'string_decoder', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'stream', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'punycode', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' },
          { find: 'querystring', replacement: './node_modules/rollup-plugin-polyfill-node/dist/index.js' }
        ]
      }),
      nodeResolve(
        {
          browser: true,
          preferBuiltins: true
        }
      )
    ],
    after: [
      nodePolyfills(
        {
          // crypto: true // this is just in ionic-team plugin
        }
      )
    ]
  }
};
