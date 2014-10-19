module.exports = function(){
	var primes = require( 'prime-sieve' )( 1000 )
	  ,  ratio = .13
	  ;

	function denom( ratio ){
		var d = 1
		  , s = 1
		  ;

		for( var i=0, l=primes.length; i<l; i++ ){
			d *= primes[ i ]
			s *= primes[ i ] - 1;

			for( var j=2; j<=primes[j]; j++ ){
				if( s * j / ( d * j - 1 ) < ratio ){
					return d*j;
				}
			}
		}
	}

	return denom( ratio );
};