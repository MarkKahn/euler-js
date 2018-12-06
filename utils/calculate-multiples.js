module.exports = function calculateMultiples( primes, keys, base, divisors ){
	keys     || ( keys     = Object.keys( primes ) );
	divisors || ( divisors = [] );
	base     || ( base     = 1  );

	keys = keys.slice();

	var    key = +keys.shift()
	  ,  power = primes[ key ]
	  , remain = keys.length
	  , i
	  ;

	for( i=0; i<=power; i++ ){
		if( remain ){
			calculateMultiples( primes, keys, base, divisors );
		}else{
			divisors.push( base );
		}
		base *= key;
	}

	return divisors;
};