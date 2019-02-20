require('../src/data.js');
const worldBank = require('../src/data/worldbank/worldbank.js');

describe('Data Bank', () => {
  it('should be an object', () => {
    expect(typeof worldBank).toBe('object');
  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});
