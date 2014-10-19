var bigInt = require( 'big-integer' );

module.exports = function(){
	var max = 0;

	for( var a=1; a<100; a++ ){
		for( var b=1; b<100; b++ ){
			max = Math.max( max, eval( bigInt( a ).pow( b ).toString().split( '' ).join( '+' ) ) );
		}
	}

	return max;
}