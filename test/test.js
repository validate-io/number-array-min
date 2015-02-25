/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isValid = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-number-array-min', function tests() {

	it( 'should export a function', function test() {
		expect( isValid ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-numeric maximum value', function test() {
		var values = [
			'5',
			null,
			undefined,
			NaN,
			true,
			function(){},
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				isValid( [], value );
			};
		}
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isValid( [1,2,3], 1 );
		assert.ok( bool );

		bool = isValid( [], 1 );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			{},
			[1,2,3],
			[1,'2',3]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isValid( value, 999999999 );
		}
	});

});
