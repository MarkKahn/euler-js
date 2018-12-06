module.exports = function( word ){
	var val = 0;

	for( var i=0, l=word.length; i<l; i++ ){
		val += word.charCodeAt( i ) - 64;
	}

	return val;
}