
/* IMPORT */

import benchmark from 'benchloop';
import minify from '../dist/index.js';
import {BEFORE} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'css-simple-minifier',
  fn: () => {
    minify ( BEFORE );
  }
});
