var        u = 1E5
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
	console.log( max );
	for( var i=0; i<100000; i++ ){
		if( divisors[i] === max ){
			console.log( i );
		}
	}
	return;

	for( i=k; i<=u; i++ ){
		( running[ divisors[i] ] || ( running[ divisors[i] ] = [] ) ).push( i );

		if( divisors[i] > max ){ max = divisors[i]; console.log( max, i ); }
		running[ backK = divisors[ i-k ] ].shift();

		// max value has "run out"
		if( ( backK === max ) && !running[ backK ].length ){
			for( var aryIx=running.length-1; aryIx>=0; aryIx-- ){
				if( running[ aryIx ] && running[ aryIx ].length ){
					console.log( max, i );
					max = aryIx;
					break;
				}
			}
		}

		ttl += max;
	}

	return ttl;
};

module.exports2 = function(){
	var  primes = [ 2, 3, 5, 7, 11, 13, 17, 19 ]
	  ,     ttl = 1
	  , a, b, c, d, e, f, g, h, nPrimes;

	for( a=0; a<10; a++ ){
		if( a ){ ttl *= 2; }
		if( ttl>u ){ break; }

		for( b=0; b<10; b++ ){
			if( b ){ ttl *= 3; }
			if( ttl>u ){ break; }

			for( c=0; c<10; c++ ){
				if( c ){ ttl *= 5; }
				if( ttl>u ){ break; }

				for( d=0; d<10; d++ ){
					if( d ){ ttl *= 7; }
					if( ttl>u ){ break; }

					for( e=0; e<10; e++ ){
						if( e ){ ttl *= 11; }
						if( ttl>u ){ break; }

						for( f=0; f<10; f++ ){
							if( f ){ ttl *= 13; }
							if( ttl>u ){ break; }

							for( g=0; g<10; g++ ){
								if( g ){ ttl *= 17; }
								if( ttl>u ){ break; }

								for( h=0; h<10; h++ ){
									if( h ){ ttl *= 19; }
									if( ttl>u ){ break; }

									nPrimes = (a+1)*(b+1)*(c+1)*(d+1)*(e+1)*(f+1)*(g+1)*(h+1);
									console.log( nPrimes );

								}
								console.log('h', h );
								if( h ){ ttl /= 19*(h-1); }
								console.log( 'ttl',ttl );
							}
							if( g ){ ttl /= 17*(g-1); }
						}
						if( f ){ ttl /= 13*f; }
					}
					if( e ){ ttl /= 11*e; }
				}
				if( d ){ ttl /= 7*d; }
			}
			if( c ){ ttl /= 5*c; }
		}
		if( b ){ ttl /= 3*b; }
	}
};