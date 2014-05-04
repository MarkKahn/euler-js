var BigInteger = require( 'big-integer' );

module.exports = function(){
	return eval( new BigInteger( '2' ).pow( 1000 ).toString().split( '' ).join( '+' ) );
};