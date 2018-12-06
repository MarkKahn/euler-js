var calculateMultiples = require( 'calculate-multiples' )
  ,         primeSieve = require( 'prime-sieve' )
  ;

module.exports = function( n, primes ){
	var maxPrime = Math.sqrt( n )
	  ,  nPrimes = {}
	  , i, l, ctr, multiples
	  ;

	primes || ( primes = primeSieve( 0|maxPrime ) );

	// determine prime factors and powers
	for( i=0, l=primes.length; ( i<l ) && ( primes[i]<=maxPrime ); i++ ){
		ctr = 0;
		while( !( n % primes[i] ) ){
			ctr++;
			n /= primes[i];
		}

		if( ctr ){
			nPrimes[ primes[i] ] = ctr;
		}
	}
	if( n > 1 ){
		nPrimes[ n ] = 1;
	}

	multiples = calculateMultiples( nPrimes );
	multiples.pop();

	return multiples.length ? multiples : [1];
};