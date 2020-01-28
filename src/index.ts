
/* CSS SIMPLE MINIFIER */

function minify ( css: string ): string {

  return css.trim ().replace ( /\s*(;|,|{|})\s*/g, '$1' );

}

/* EXPORT */

export default minify;
