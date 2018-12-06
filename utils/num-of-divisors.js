module.exports = function( num ){
	var sqrt = Math.pow( num, .5 )
	  ,  ttl = 0
	  , i
	  ;

	for( i=1; i<=sqrt; i++ ){
		if( num % i === 0 ){
			ttl += 2;
		}
	}

	return ttl;
};