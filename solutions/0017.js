var numToWords = require( 'num-to-words' );

module.exports = function(){
	var letters = 0
	  ,  regexp = /[- ]/g
	  ;

	for( var i=1; i<=1000; i++ ){
		letters += numToWords( i ).replace( regexp, '' ).length;
	}

	return letters;
};