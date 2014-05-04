var BigInt = require( 'big-integer' );

module.exports = function(){
	var  a = BigInt( 1 )
	  ,  b = BigInt( 1 )
	  , ix = 2
	  , tmp
	  ;

	while( a.toString().length < 1000 ){
		tmp = a;
		a   = a.add( b );
		b   = tmp;

		ix++;
	}

	return ix;
};