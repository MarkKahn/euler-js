module.exports = function nCr( n, r ){
	if( r > n/2 ){ r = n-r; }
	var res = 1
	  , i
	;

	for( i=1; i<=r; i++ ){
		res *= n-r+i;
		res /= i;
	}

	return res;
};