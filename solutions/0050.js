module.exports = function(){
	var   primes = require( 'prime-sieve' )( 1000000 )
	  , maxTerms = 0
	  , num
	  ;

	// only check the last 200 primes (just a guess)
	for( var i=primes.length-1; i>=primes.length-200; i-- ){
		for( var j=0; j<i-21; j++ ){
			var ttl = 0
			  ,  ix = j;

			while( ttl < primes[i] ){
				ttl += primes[ ix++ ];
			}

			if( ( ttl === primes[i] ) && ( ( ix-j ) > maxTerms ) ){
				maxTerms = ix - j;
				num      = primes[i];
			}
		}
	}

	return num;
}