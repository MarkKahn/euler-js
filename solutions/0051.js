module.exports = function(){
	var primes = require( 'prime-sieve' )( 999999 )
	   ,  hash = primes.getHash()
	   ,    rx = /(.*)([0-2])(.*)(\2)(.*)(\2)(.*)/
	   , a, b, i, l, match, failed
	   ;

	outer:
	for( a=0, b=primes.length; a<b; a++ ){
		num    = primes[ a ];
		numStr = num.toString();

		if( !( match = rx.exec( numStr ) ) ){ continue; }

		failed = 0;
		for( i=0; i<10; i++ ){
			if( !hash[ match[1] + i + match[3] + i + match[5] + i + match[7] ] ){
				failed++;

				if( failed===3 ){ continue outer; }
			}
		}

		return num
	}
};