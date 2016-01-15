# tsbetween

[![Build Status](https://travis-ci.org/John-Lin/tsbetween.svg?branch=master)](https://travis-ci.org/John-Lin/tsbetween)

Convert start and end time from ISO 8601 to UNIX timestamps.

# Install

```sh
$ npm install --save tsbetween
```

# Usage

```javascript
'use strict';
let tsbetween = require('tsbetween');

let between = tsBetween('2016-01-13T14:33:37+00:0', '2016-01-14T14:33:37+00:0');

console.log(between.startTimestamp);
//=> 1452695617000
console.log(between.endTimestamp);
//=> 1452782017000


```

# License

MIT © [John-Lin](https://github.com/John-Lin)
