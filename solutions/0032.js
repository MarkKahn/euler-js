var products = {};

module.exports = function(){
	for( var i=1; i<100; i++ ){

		for( var j=100; j<2000; j++ ){
			var product = i*j
			  ,     str = '' + i + j + product
			  ;

			if( ( str.length !== 9 )
				||  ~str.indexOf( '0' )  // if it has a zero
				|| /(.).*\1/.test( str ) // or any repeated digits.  So what if it's slow
			){ continue; }

			products[ product ] = 1;
		}
	}

	return Object.keys( products ).reduce( function( product, ttl ){
		return +product + +ttl;
	} );
};