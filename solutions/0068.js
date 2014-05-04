module.exports = function(){
	var results = []
	  , a, b, c, d, e, f, j, h, i, j, ttl, res, min
	  ;

	for( a=1; a<=10; a++ ){

		for( b=1; b<=10; b++ ){
			if( b===a ){ continue; }

			for( c=1; c<=10; c++ ){
				if( (c===a) || (c===b) ){ continue; }
				ttl=a+b+c;

				for( d=1; d<=10; d++ ){
					if( (d===a) || (d===b) || (d===c) ){ continue; }

					for( e=1; e<=10; e++ ){
						if( (e===a) || (e===b) || (e===c) || (e===d) ){ continue; }
						if( (d+c+e) !== ttl ){ continue; }

						for( f=1; f<=10; f++ ){
							if( (f===a) || (f===b) || (f===c) || (f===d) || (f===e) ){ continue; }

							for( g=1; g<=10; g++ ){
								if( (g===a) || (g===b) || (g===c) || (g===d) || (g===e) || (g===f) ){ continue; }
								if( (f+e+g) !== ttl ){ continue; }

								for( h=1; h<=10; h++ ){
									if( (h===a) || (h===b) || (h===c) || (h===d) || (h===e) || (h===f) || (h===g) ){ continue; }

									for( i=1; i<=10; i++ ){
										if( (i===a) || (i===b) || (i===c) || (i===d) || (i===e) || (i===f) || (i===g) || (i===h) ){ continue; }
										if( (h+g+i) !== ttl ){ continue; }

										for( j=1; j<=10; j++ ){
											if( (j===a) || (j===b) || (j===c) || (j===d) || (j===e) || (j===f) || (j===g) || (j===h) || (j===i) ){ continue; }
											if( (j+i+b) !== ttl ){ continue; }

											res = [ [a,b,c],[d,c,e],[f,e,g],[h,g,i],[j,i,b] ];
											min = Math.min( a,d,f,h,j );
											while( res[0][0] !== min ){
												res.unshift( res.pop() );
											}
											res = [].concat.apply( [], res ).join('');
											if( res.length !== 16 ){ continue; }

											results.push( res );
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	return results.sort().pop();
};