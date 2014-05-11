module.exports = function(){
	var matrix = require( '../resources/0081-matrix.js' )
	  ,   size = matrix.length
	  , i, j
	  ;

	for( i=0; i<size; i++ ){
		for( j=0; j<size; j++ ){
			if( !i && !j ){ continue; }
			matrix[ i ][ j ] = Math.min( matrix[i][j] + ( i ? matrix[i-1][j] : Infinity ), matrix[i][j] + ( j ? matrix[i][j-1] : Infinity ) );
		}
	}

	return matrix[ i-1 ][ j-1 ];
}