var bigint = require( 'big-integer' );

module.exports = function(){
	var     n = 0
	  , cubes = {}
	  , cube, sorted
	  ;

	while( ++n ){
		cube   = bigint( n ).pow( 3 ) + '';
		sorted = cube.split( '' ).sort().join( '' );

		if( !cubes[ sorted ] ){
			cubes[ sorted ] = { smallest: cube, count: 0 };
		}

		if( ++cubes[ sorted ].count === 5 ){
			return cubes[ sorted ].smallest;
		}
	}
};