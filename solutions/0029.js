var BigInt = require( 'big-integer' );

module.exports = function(){
	var solutions = {};

	for( var a=2; a<=100; a++ ){
		for( var b=2; b<=100; b++ ){
			solutions[ BigInt( a ).pow( b ).toString() ] = 1;
		}
	}

	return Object.keys( solutions ).length;
};