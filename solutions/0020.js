var BigInteger = require( 'big-integer' );

module.exports = function(){
	var num = new BigInteger( '2' )
	  , i
	  ;

	for( i=3; i<=100; i++ ){
		num = num.multiply( i );
	}

	return eval( num.toString().split( '' ).join( '+' ) )
};