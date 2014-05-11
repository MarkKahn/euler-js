module.exports = function(){
	var  primes = require( 'prime-sieve' )( 10000 )
	  ,     num = 7
	  , squares = []
	  , toSquare, squared
	  ;

	outer:
	while( num+=2 ){
		if( primes.isPrime( num ) ){ continue; }
		toSquare = 1;

		while( ( squared = 2*toSquare*toSquare++ ) < num ){
			if( primes.isPrime( num - squared ) ){ continue outer; }
		}

		return num;
	}
};