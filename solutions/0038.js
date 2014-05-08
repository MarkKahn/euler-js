module.exports = function(){
	var largest = '';

	for( var i=9876; i>=0; i-- ){
		var str = i+'' + i*2;

		if( ~str.indexOf( '0' ) || /(.).*\1/.test( str ) ){ continue; }

		return str;
	}
};