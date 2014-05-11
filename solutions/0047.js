module.exports = function(){
	var  primes = require( 'prime-sieve' )( 10000000 )
	  ,     num = 10000
	  ;

	while( num ){
		if( distinctSet( getFactors( num ), getFactors( num+1 ), getFactors( num+2 ), getFactors( num+3 ) ) ){
			return num;
		}
	}

	function getFactors( num ){
		return primes.primeFactors( num, true );
	}

	function distinctSet( a, b, c, d ){
		var factors = {};

		if( !lookAt( d ) ){ num += 4; return false; };
		if( !lookAt( c ) ){ num += 3; return false; };
		if( !lookAt( b ) ){ num += 2; return false; };
		if( !lookAt( a ) ){ num += 1; return false; };

		return true;

		function lookAt( numFactors ){
			if( numFactors.length < 4 ){ return false; }

			var lastFactor
			  , factorCount = 0
			  , factorSets  = 0
			  , factor
			  , i, l
			  ;

			for( i=0, l=numFactors.length; i<l; i++ ){
				if( lastFactor && ( numFactors[ i ] !== lastFactor ) ){
					if( !checkFactor() ){ return false; }
				}
				lastFactor = numFactors[ i ];
				factorCount++;
			}

			if( !checkFactor() ){ return false; }

			if( factorSets !== 4 ){ return false; }

			return true;

			function checkFactor(){
				factor = lastFactor + '^' + factorCount;

				if( factors[ factor ] ){ console.log( 'bailing on ' + factor );return false; }

				factors[ factor ] = 1;
				factorCount       = 0;
				factorSets++;

				return true;
			}
		}
	}
};