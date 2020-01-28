
/* IMPORT */

import {describe} from 'ava-spec';
import {default as minify} from '../dist';
import {BEFORE, AFTER} from './fixtures';

/* CSS SIMPLE MINIFIER */

describe ( 'CSS Simple Minifier', it => {

  it ( 'works', t => {

    t.is ( minify ( BEFORE ), AFTER );

  });

});
