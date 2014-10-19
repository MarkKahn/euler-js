var nCr = require( 'ncr' );

module.exports = function(){
	var total = 0;

	for( var n=23; n<=100; n++ ){
		for( var r=1; r<n; r++ ){
			if( nCr( n, r ) > 1E6 ){
				total++;
			}
		}
	}

	return total;
}