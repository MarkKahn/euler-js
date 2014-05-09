var    names = require( '../resources/0042-names' )
  , alphaVal = require( 'word-to-alpha-value' )
  ;

module.exports = function(){
	var triangleNumbers = {}
	  ,             ttl = 0
	  ;

	// calculate the first 100 numbers, should be plenty
	for( var i=0; i<100; i++ ){
		triangleNumbers[ 0.5 * i * ( i+1 ) ] = 1;
	}

	for( var i=0, l=names.length; i<l; i++ ){
		if( triangleNumbers[ alphaVal( names[i] ) ] ){
			ttl++;
		}
	}

	return ttl;
};