// TODO: this one runs slow.  Fix it

var getDivisors = require( 'get-divisors' )
  ,  primeSieve = require( 'prime-sieve' )
  ,      primes = primeSieve( 28123 )
  ;

module.exports = function(){
	var       sum = 0
	  , abundants = []
	  , divisors, total
	  ;

	function summable( num ){
		for( var i=0, l=abundants.length; i<l; i++ ){
			for( var j=i; j<l; j++ ){
				if( ( abundants[i] + abundants[j] ) === num ){
					return true;
				}
			}
		}

		return false;
	}

	for( var i=1; i<28123; i++ ){
		divisors = getDivisors( i, primes );

		if( !summable( i ) ){
			sum += i;
		}

		if( eval( divisors.join( '+' ) ) > i ){
			abundants.push( i );
		}
	}

	return sum;
};