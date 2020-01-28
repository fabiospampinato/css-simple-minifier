
/* FIXTURES */

const BEFORE = `
  .foo,
  .bar {
    color: red;
  }

  .baz {
    color: blue;
  }
`;

const AFTER = '.foo,.bar{color: red;}.baz{color: blue;}';

/* EXPORT */

module.exports = {BEFORE, AFTER};
