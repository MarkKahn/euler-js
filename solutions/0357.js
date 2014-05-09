// TODO: this one is slow

var  primeSieve = require( 'prime-sieve'  )
  , getDivisors = require( 'generator-get-divisors' )
  ;

module.exports = function(){
	// not going to 1e8 because of a memory issue
	var primes = primeSieve( 5e7+1 )
	  ,   hash = primes.getHash()
	  ,    ttl = 0
	  , i, sqrt, prime, j, div
	  ;

	loop:
	for( i=2; i<=1e8; i+=2 ){

(i%100000) || console.log( i.toString().split('').reverse().join('').replace(/(.{3})(?!$)/g, '$1,' ).split('').reverse().join('') );
		// if i+1 is not prime, the last check won't work
		if( !primes.isPrime( i+1 ) ){ continue; }

		// loop divisors
		var divisors = getDivisors( i ), div;
		for( var j=0, m=divisors.length; j<m; j++ ){
			div = divisors[ j ];
			if( !primes.isPrime( div + i / div ) ){
				continue loop;
			}
		}

		ttl+=i;
	}

	return ttl+1;
};