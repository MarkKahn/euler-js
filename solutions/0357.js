// TODO: this one is slow

var primeSieve = require( 'prime-sieve' );

module.exports = function(){
	function sieveToMap( primes ){
		var out = {};
		for( var i=0, l=primes.length; i<l; i++ ){
			out[ primes[i] ] = 1;
		}

		return out;
	}

	function isPrime( n ){
		if( n<5e7 ){ return hash[n]; }

		var sqrt = Math.sqrt( n )
		  , prime
		  ;

		for( var i=0; (prime=primes[i])<=sqrt; i++ ){
			if( !(n%prime) ){ return false; }
		}

		return true;
	}

	// not going to 1e8 because of a memory issue
	var primes = primeSieve( 5e7+1 )
	  ,   hash = sieveToMap( primes )
	  ,    ttl = 0
	  , i, sqrt, prime, j, div
	  ;

	loop:
	for( i=2; i<=1e8; i+=2 ){
		// if i+1 is not prime, the last check won't work
		if( !isPrime( i+1 ) ){ continue; }

		// loop divisors
		sqrt = Math.sqrt( i );
		for( j=1; j<=sqrt; j++ ){
			if( !(i%j) ){
				if( !isPrime( j+i/j ) || !isPrime( (div=i/j)+i/div ) ){
					continue loop;
				}
			}
		}

		ttl+=i;
	}

	return ttl+1;
};