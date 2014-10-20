var        u = 1E8
  ,        k = 1E5
  , divisors
  ;

function divSieve( limit ){
	var divisors = new Uint16Array( limit );

	for( var i=0; i<limit; i++ ){
		divisors[i] = 1;
	}

	var ix;
	for( var num=2, lim=limit; num<lim; num++ ){
		ix = num;
		while( ix <= limit ){
			divisors[ ix ]++;
			ix += num;
		}
	}

	return divisors;
};

module.exports = function(){
	divisors = divSieve( u+1 );

	var     lim = u-k+1
	  ,     max = 0
	  , running = []
	  ,     ttl = 0
	  , i, backK
	  ;

	// pre-populate running and max for the first set
	for( i=1; i<k+1; i++ ){
		( running[ divisors[i] ] || ( running[ divisors[i] ] = [] ) ).push( i );
	}
	max = Math.max.apply( Math, [].slice.call( divisors, 1, k+1 ) );

	for( i=k; i<=u; i++ ){
		( running[ divisors[i] ] || ( running[ divisors[i] ] = [] ) ).push( i );

		if( divisors[i] > max ){ max = divisors[i]; }
		running[ backK = divisors[ i-k ] ].shift();

		// max value has "run out"
		if( ( backK === max ) && !running[ backK ].length ){
			for( var aryIx=running.length-1; aryIx>=0; aryIx-- ){
				if( running[ aryIx ] && running[ aryIx ].length ){
					max = aryIx;
					break;
				}
			}
		}

		ttl += max;
	}

	return ttl;
};