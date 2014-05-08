var     primes = require( 'prime-sieve' )( Math.pow( 100000000, 0.5 ) )
  , primeCheck = require( 'prime-check' )
  ,    permute = require( 'generator-permutations' )
  ;

module.exports = function(){
	var gen = permute( [ 1, 2, 3, 4, 5, 6, 7 ], '' )
	  , val
	  ;

	while( ( val=gen.next() ) && !val.done ){
		if( primeCheck( +val.value, primes ) ){
			return val.value;
		}
	}
};