// Lazy way :)

var BigInt = require( 'big-integer' );

module.exports = function(){
	var num = BigInt( '0' );;

	for( var i=1; i<=1000; i++ ){
		num = num.add( ( BigInt( i.toString() ) ).pow( i ) );
	}

	num = num.toString();
	return num.substr( num.length - 10 );
};