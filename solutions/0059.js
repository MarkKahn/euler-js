var cipher = require( '../resources/0059-cipher.js' )
  ,     rx = /[.,'+;:?!a-z0-9\(\)\"\& ]/i;

module.exports = function(){
	loopA:for( var a=0; a<26; a++ ){
		loopB:for( var b=0; b<26; b++ ){
			loopC:for( var c=0; c<26; c++ ){
				var key = [ a+97, b+97, c+97 ]
				  , out = ''
				  , letter
				  ;

				for( var i=0, l=cipher.length; i<l; i++ ){
					letter = String.fromCharCode( cipher[i] ^ key[ i%3 ] );
					if( !rx.test( letter ) ){
						switch( i%3 ){
							case 0: continue loopA;
							case 1: continue loopB;
							case 2: continue loopC;
						}
					}

					out += letter;
				}

				console.log( out );
				return eval( out.split( '' ).map( function( letter ){
					return letter.charCodeAt( 0 );
				} ).join( '+' ) );
			}
		}
	}
};