var permute = require( 'generator-permutations' );

module.exports = function(){
	var gen = permute( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], '' )
	  , ttl = 0
	  , num
	  ;

	while( ( val=gen.next() ) && !val.done ){
		num = val.value;

		if(
			   ( +num.substr( 1, 3 ) % 2  )
			|| ( +num.substr( 2, 3 ) % 3  )
			|| ( +num.substr( 3, 3 ) % 5  )
			|| ( +num.substr( 4, 3 ) % 7  )
			|| ( +num.substr( 5, 3 ) % 11 )
			|| ( +num.substr( 6, 3 ) % 13 )
			|| ( +num.substr( 7, 3 ) % 17 )
		){
			continue;
		}

		ttl += +num;
	}

	return ttl;
};