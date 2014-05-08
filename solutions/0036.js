require( 'strings' );

module.exports = function(){
	var sum = 0;

	for( var i=0; i<1000000; i++ ){
		if( i != i.toString().reverse() ){ continue; }

		var b2 = i.toString( 2 );
		if( b2 != b2.reverse() ){ continue; }

		sum += i;
	}

	return sum;
}