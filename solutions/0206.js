var BigInteger = require( 'big-integer' );

module.exports = function(){
	// use normal JS to quickly scan for candidates and BigInteger to verify which candidate works :)
	for( var i=1010101010; i<1420101010; i += 10 ){
		if( /^1\d2\d3\d4\d5\d6\d7\d8/.test( (i*i)+'' ) && /^1\d2\d3\d4\d5\d6\d7\d8\d9\d0/.test( BigInteger( i ).pow( 2 ).toString() ) ){
			return i;
		}
	}
}