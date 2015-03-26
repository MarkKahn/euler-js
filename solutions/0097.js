var BigInteger = require( 'big-integer' );

module.exports = function(){
	var num = 2;
	for( var i=0; i<(7830456-1); i++ ){
		num = ( num * 2 ) % 1E10;
	}

	return ( ( num * 28433 ) % 1E10 ) + 1;
};