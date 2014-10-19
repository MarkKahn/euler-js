var bigint = require( 'big-integer' );

module.exports = function(){
	var     num = bigint( 3 )
	  ,     dem = bigint( 2 )
	  , counter = 0
	  , d2
	  ;

	for( var i=0; i<1000; i++ ){
		d2  = num.add( dem );
		num = num.add( dem.multiply( 2 ) );
		dem = d2;

		if( num.toString().length > dem.toString().length ){ counter++; }
	}

	return counter;
};