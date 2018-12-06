module.exports = function primeSieve( limit ){
	var    sqrt = 0|Math.sqrt( limit )
	  ,   typed = ( typeof Int8Array !== 'undefined' )
	  ,    type = !typed ?       Array
	     : limit < 1<<8  ?  Uint8Array
	     : limit < 1<<16 ? Uint16Array
	     : limit < 1<<32 ? Uint32Array
	     :                Float32Array

	  , nPrimes = new type( limit+1 )
	  ,  primes = new type( limit )
	  ,      ix = 1
	  ,    gaps = [ 2, 2, 4, 2, 4, 2, 4, 6, 2
	              , 6, 4, 2, 4, 2, 4, 6, 2 ]
	  ,   gapIx = 0
	  , i, j, hash
	  ;

	primes[ 0 ] = 2;

	for( i=3; i<=sqrt; i+=gaps[ gapIx++ ] ){
		( gapIx === 17 ) && ( gapIx = 9 );
		if( !nPrimes[ i ] ){
			for( j=i*i; j<=limit; j+=i ){
				nPrimes[ j ] = 1;
			}
		}
	}

	for( i=3; i<=limit; i+=2 ){
		if( !nPrimes[ i ] ){ primes[ ix++ ] = i; }
	}

	var output = typed ? [].slice.call( primes.subarray( 0, ix ) ) : primes;
	output.getHash = function getHash(){
		if( hash ){ return hash; }

		hash = {};
		for( var i=0, l=primes.length; i<l; i++ ){
			hash[ primes[i] ] = 1;
		}

		return hash;
	};

	output.isPrime = function( n ){
		if( hash )      { return !!hash[ n ];   }
		if( n===2 )     { return true;          }
		if( !( n&1 ) )  { return false;         }
		if( n <= limit ){ return !nPrimes[ n ]; }

		var max = Math.pow( n, .5 );

		for( var i=0, l=primes.length; i<l; i++ ){
			if( primes[i] > max ){ return true; }

			if( !( n%primes[i] ) ){ return false; }
		}

		return true;

	};

	output.primeFactors = function( n, includeDuplicates ){
		var factors = []
		  ,       i = 0
		  , last
		  ;

		while( n > 1 ){
			while( !( n%primes[i] ) ){
				if( includeDuplicates || ( last !== primes[i] ) ){
					factors.push( primes[i] );
				}
				last = primes[i];

				n /= primes[i];
			}
			i++;
		}

		return factors;
	};

	return output;
};