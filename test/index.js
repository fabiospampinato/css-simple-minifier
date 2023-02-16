
/* IMPORT */

import {describe} from 'fava';
import minify from '../dist/index.js';
import {BEFORE, AFTER} from './fixtures.js';

/* MAIN */

describe ( 'CSS Simple Minifier', it => {

  it ( 'works', t => {

    t.is ( minify ( BEFORE ), AFTER );

  });

});
