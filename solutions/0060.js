var primes = require( 'prime-sieve' )( 200000000 );

module.exports = function(){
	for( var i=4; i<50000; i++ ){
		for( var j=3; j<i; j++ ){
			if(
				   !primes.isPrime( primes[i] + '' + primes[j] )
				|| !primes.isPrime( primes[j] + '' + primes[i] )
			){
				continue;
			}

			for( var k=2; k<j; k++ ){
				if(
					   !primes.isPrime( primes[i] + '' + primes[k] )
					|| !primes.isPrime( primes[j] + '' + primes[k] )
					|| !primes.isPrime( primes[k] + '' + primes[i] )
					|| !primes.isPrime( primes[k] + '' + primes[j] )
				){
					continue;
				}

				for( var l=1; l<k; l++ ){
					if(
						   !primes.isPrime( primes[i] + '' + primes[l] )
						|| !primes.isPrime( primes[j] + '' + primes[l] )
						|| !primes.isPrime( primes[k] + '' + primes[l] )
						|| !primes.isPrime( primes[l] + '' + primes[i] )
						|| !primes.isPrime( primes[l] + '' + primes[j] )
						|| !primes.isPrime( primes[l] + '' + primes[k] )
					){
						continue;
					}

					for( var m=0; m<l; m++ ){
						if(
							   !primes.isPrime( primes[i] + '' + primes[m] )
							|| !primes.isPrime( primes[j] + '' + primes[m] )
							|| !primes.isPrime( primes[k] + '' + primes[m] )
							|| !primes.isPrime( primes[l] + '' + primes[m] )
							|| !primes.isPrime( primes[m] + '' + primes[i] )
							|| !primes.isPrime( primes[m] + '' + primes[j] )
							|| !primes.isPrime( primes[m] + '' + primes[k] )
							|| !primes.isPrime( primes[m] + '' + primes[l] )
						){
							continue;
						}

						return primes[i] + primes[j] + primes[k] + primes[l] + primes[m];
					}

				}
			}
		}
	}
};