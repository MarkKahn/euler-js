module.exports = function(){
	var primes = require( 'prime-sieve' )( 9999 );

	for( var i=1489; i<9993; i+=2 ){
		if( !primes.isPrime( i ) ){ continue; }

		for( var j=2, m=(9999-i)/2; j<=m; j++ ){
			if(
				   !primes.isPrime( i+j )
				|| !primes.isPrime( i+j+j )
				|| ( ( i ).toString().split( '' ).sort().join( '' ) !== ( i+j   ).toString().split( '' ).sort().join( '' ) )
				|| ( ( i ).toString().split( '' ).sort().join( '' ) !== ( i+j+j ).toString().split( '' ).sort().join( '' ) )
			){ continue; }

			return i.toString() + ( i+j ) + ( i+j+j );
		}
	}
};