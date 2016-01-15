'use strict';
let tsBetween = require('../index.js');
let  assert = require('assert');
describe('#tsBetween', () => {
  it('should return an object with Timestamp', () => {
    let between = tsBetween('2016-01-13T14:33:37+00:0',
      '2016-01-14T14:33:37+00:0');

    console.log(between)
    assert.equal(86400000, between.endTimestamp - between.startTimestamp);
  });
});
