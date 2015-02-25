'use strict';

var isValid = require( './../lib' );

console.log( isValid( [1,2,3], 1 ) );
// returns true

console.log( isValid( [], 1 ) );
// returns true

console.log( isValid( [1,2,3], 2 ) );
// returns false

console.log( isValid( [1,NaN,3], 1 ) );
// returns false
