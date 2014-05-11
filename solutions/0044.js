module.exports = function(){
	var pentagonals = []
	  ,       pHash = {}
	  ,       limit = 10000
	  ,        dMin = Infinity
	  , num
	  ;

	// generate the first 100 numbers
	for( var i=0; i<limit; i++ ){
		num = i * ( 3*i - 1 ) / 2;

		pentagonals.push( num );
		pHash[ num ] = 1;
	}

	for( i=1; i<limit; i++ ){
		for( j=i+1; j<limit; j++ ){
			if( pHash[ pentagonals[ i ] + pentagonals[ j ] ] && pHash[ pentagonals[ j ] - pentagonals[ i ] ] ){
				dMin = Math.min( dMin, pentagonals[ j ] - pentagonals[ i ] );
			}
		}
	}

	return dMin;
}