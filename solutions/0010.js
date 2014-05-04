var primeSieve = require( 'prime-sieve' );

module.exports = function(){
	return eval( primeSieve( 2000000 ).join( '+' ) );
};