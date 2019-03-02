require('../src/data/worldbank/worldbank');
require('../src/data');
const fixtures = require('./data-fixtures');

describe('World data functions', () => {
  it('should be a function', () => {
    expect(typeof (window.dataLovers.filterCountry)).toBe('function');
  });

  it('Should return filterMxData', () => {
     const dataMx = window.dataLovers.filterCountry('MEX', fixtures.indicatorsPerceptionCult);
     expect(dataMx).toEqual(fixtures.filterMxData);
   });
});
