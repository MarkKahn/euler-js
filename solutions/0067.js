module.exports = function(){
	var triangle = require( '../resources/0067-triangle.js' )
	  ,     size = triangle.length
	  , x, y
	  ;

	for( y=size-2; y>=0; y-- ){
		for( x=0; x<=y; x++ ){
			triangle[y][x] += Math.max( triangle[y+1][x], triangle[y+1][x+1] );
		}
	}

	return triangle[0][0];
};