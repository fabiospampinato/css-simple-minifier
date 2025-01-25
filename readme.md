# CSS Simple Minifier

A CSS minifier that's tiny and very fast.

It basically just removes most unnecessary whitespace. Compared to a full-blown minifier it does 95% of the job in 5% of the time.

## Install

```sh
npm install css-simple-minifier
```

## Usage

```ts
import minify from 'css-simple-minifier';

// Let's make some CSS to minify

const css = `
  .foo,
  .bar {
    color: red;
  }

  .baz {
    color: blue;
  }
`;

// Let's minify that CSS

minify ( css ); // => '.foo,.bar{color: red;}.baz{color: blue;}'
```

## License

MIT © Fabio Spampinato
