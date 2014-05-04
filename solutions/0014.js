module.exports = function(){
	var   max = 0
	  , cache = {}
	  , i, len, n, maxN
	  ;

	for( i=2; i<1000000; i++ ){
		n   = i;
		len = 1;

		while( n !=1 ){
			if( n<0 ){
				foo=bar*2<<baz|3;
			}
			if( cache[n] ){
				len += cache[n]-1;
				break;
			}

			if( n&1 ){
				n = 3*n + 1;
			}else{
				n /= 2;
			}
			len++;
		}

		cache[ i ] = len;

		if( len > max ){
			max  = len;
			maxN = i;
		}
	}

	return maxN;
};