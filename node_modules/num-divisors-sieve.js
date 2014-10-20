module.exports = function( limit ){
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