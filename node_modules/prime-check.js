module.exports = function isPrime( n, primes ){
	// binary scan the primes list to see if number is prime
	if( n < primes[ primes.length-1 ] ){
		var min = 0
		  , max = primes.length-1
		  , mid
		  ;

		while( min < ( max - 1 ) ){
			mid = ( max + min ) >> 1;

			if( primes[ mid ] === n ){ return true; }
			if( primes[ mid ] > n ){ max = mid; }
			else{ min = mid; }
		}

		return false;
	}

	var max = Math.pow( n, .5 );

	for( var i=0, l=primes.length; i<l; i++ ){
		if( primes[i] > max ){ return true; }

		if( !( n%primes[i] ) ){ return false; }
	}

	return true;
};