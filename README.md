number-array-min
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a numeric array in which no element exceeds a minimum value.


## Installation

``` bash
$ npm install validate.io-number-array-min
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isValid = require( 'validate.io-number-array-min' );
```

#### isValid( value, min )

Validates if a `value` is a numeric `array` in which no element exceeds a minimum value.

``` javascript 
var value = [1,2,3],
	min = 1;

var bool = isValid( value, min );
// returns true
```


## Examples

``` javascript
var isValid = require( 'validate.io-number-array-min' );

console.log( isValid( [1,2,3], 1 ) );
// returns true

console.log( isValid( [], 1 ) );
// returns true

console.log( isValid( [1,2,3], 2 ) );
// returns false

console.log( isValid( [1,NaN,3], 1 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-number-array-min.svg
[npm-url]: https://npmjs.org/package/validate.io-number-array-min

[travis-image]: http://img.shields.io/travis/validate-io/number-array-min/master.svg
[travis-url]: https://travis-ci.org/validate-io/number-array-min

[coveralls-image]: https://img.shields.io/coveralls/validate-io/number-array-min/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/number-array-min?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/number-array-min.svg
[dependencies-url]: https://david-dm.org/validate-io/number-array-min

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/number-array-min.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/number-array-min

[github-issues-image]: http://img.shields.io/github/issues/validate-io/number-array-min.svg
[github-issues-url]: https://github.com/validate-io/number-array-min/issues
