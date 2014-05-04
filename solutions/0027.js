var primeSieve = require( 'prime-sieve' )
  ,     primes = primeSieve( 10000000 )
  ,   maxPrime = primes[ primes.length - 1 ]
  ,  primesMap = sieveToMap( primes )
  ;

function sieveToMap( primes ){
	var out = {};
	for( var i=0, l=primes.length; i<l; i++ ){
		out[ primes[i] ] = 1;
	}

	return out;
}

function isPrime( n ){
	if( n > maxPrime ){
		throw new Error( 'n is too large' );
	}

	return !!primesMap[ n ];
}

module.exports = function(){
	var maxRun = 0, maxProduct = 0;
	for( var a=-999; a<1000; a++ ){
		for( var b=-999; b<1000; b++ ){
			var n=0;

			while( isPrime( n*n + a*n + b ) ){
				n++;
			}

			if( n > maxRun ){
				maxRun     = n;
				maxProduct = a*b;
			}
		}
	}

	return maxProduct;
};