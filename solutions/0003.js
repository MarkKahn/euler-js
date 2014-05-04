var primeSieve = require( 'prime-sieve' );

module.exports = function(){
	var    num = 600851475143
	  ,   sqrt = 0|Math.pow( num, .5 )
	  , primes = primeSieve( sqrt )
	  , prime
	  ;

	while( ( prime=primes.pop() ) && ( num%prime ) );

	return prime;
}