var  primeSieve = require( 'prime-sieve' )
  , getDivisors = require( 'get-divisors' )
  ;

module.exports = function(){
	function dN( n ){
		var divisors = getDivisors( n, primes )
		  ,      sum = 0
		  , i, l
		  ;

		for( i=0, l=divisors.length; i<l; i++ ){
			sum += divisors[i];
		}

		return sum;
	}

	var primes = primeSieve( 100 )
	  ,    sum = 0
	  , i, divisors, mult, iSum
	  ;

	for( i=2; i<10000; i++ ){
		iSum = dN( i );
		if( ( iSum <= i ) || ( i != dN( iSum ) ) ){ continue; }

		sum += i + iSum;
	}

	return sum;
};