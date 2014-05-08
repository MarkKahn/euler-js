var  sieve = require( 'prime-sieve' )
  , primes = sieve( 1000000 )
  ,   hash = primes.getHash()
  ;

module.exports = function(){
	var sum = 0;

	outer:for( var i=4, l=primes.length; i<l; i++ ){
		var pStr = primes[i].toString();

		for( var j=1, m=pStr.length; j<m; j++ ){
			if( !hash[ pStr.substr( j ) ] || !hash[ pStr.substr( 0, j ) ] ){ continue outer; }
		}

		sum += primes[i];
	}

	return sum;
};