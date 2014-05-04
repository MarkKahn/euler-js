var primeSieve = require( 'prime-sieve' );

module.exports = function(){
	return primeSieve( 110000 )[ 10000 ];
};