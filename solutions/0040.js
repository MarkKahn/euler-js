module.exports = function(){
	var numStr = Array( 200000 ).join().split( ',' ).map( function( i, i ){ return i; } ).join('');

	return +numStr[1] * +numStr[10] * +numStr[100] * +numStr[1000] * +numStr[10000] * +numStr[100000] * +numStr[1000000];
}