'use strict';
let moment = require('moment');

function tsBetween(start, end) {
  return {
    startTimestamp: moment(start).format('x'),
    endTimestamp: moment(end).format('x'),
  };
};

module.exports = tsBetween;
