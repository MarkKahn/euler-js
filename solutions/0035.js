var  sieve = require( 'prime-sieve' )
  , primes = sieve( 1000000 )
  ,   hash = primes.getHash()
  ;

module.exports = function(){
	var total = 0;
	outer:for( var i=0, l=primes.length; i<l; i++ ){
		var pStr = primes[i] + '';

		for( var j=0, m=pStr.length; j<m; j++ ){
			if( !hash[ pStr.substr( j ) + pStr.substr( 0, j ) ] ){
				continue outer;
			}
		}

		total++;
	}

	return total;
};