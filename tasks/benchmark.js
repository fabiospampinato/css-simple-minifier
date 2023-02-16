
/* IMPORT */

import benchmark from 'benchloop';
import minify from '../dist/index.js';
import {BEFORE} from '../test/fixtures.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000
});

benchmark ({
  name: 'css-simple-minifier',
  fn: () => {
    minify ( BEFORE );
  }
});
