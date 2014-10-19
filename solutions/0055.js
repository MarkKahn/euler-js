var lychrel = require( 'lychrel-number' );

module.exports = function(){
	var total = 0;

	for( var i=1; i<10000; i++ ){
		if( lychrel( i ) ){ total++; }
	}

	return total;
};