
/* IMPORT */

const {default: minify} = require ( '../dist' ),
      {BEFORE} = require ( '../test/fixtures'),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'css-simple-minifier',
  fn: () => {
    minify ( BEFORE );
  }
});
