/**
*
*	VALIDATE: number-array-min
*
*
*	DESCRIPTION:
*		- Validates if a value is a numeric array in which no element exceeds a minimum value.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number' );


// NUMERIC ARRAY MIN //

/**
* FUNCTION: isArrayWithMin( value, min )
*	Validates if a value is a numeric array in which no element exceeds a minimum value.
*
* @param {*} value - value to be validated
* @param {Number} min - minimum allowed value
* @returns {Boolean} boolean indicating if a value is a numeric array in which no element exceeds a minimum value
*/
function isArrayWithMin( value, min ) {
	var val;
	if ( !isNumber( min ) ) {
		throw new TypeError( 'isArrayWithMin()::invalid input argument. Minimum allowed value must be numeric. Value: `' + min + '`.' );
	}
	if ( !isArray( value ) ) {
		return false;
	}
	for ( var i = 0; i < value.length; i++ ) {
		val = value[ i ];
		if ( !isNumber( val ) || val < min ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isArrayWithMin()


// EXPORTS //

module.exports = isArrayWithMin;
