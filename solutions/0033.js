module.exports = function(){
	var total = 1;

	for( var a=1; a<10; a++ ){
		for( var b=1; b<10; b++ ){
			if( ( a==0 ) && ( b==0 ) ){ continue; }

			for( var c=0; c<10; c++ ){
				for( var d=0; d<10; d++ ){
					var r = ( 10*a+b ) / ( 10*c+d );

					if( r >= 1 ){ continue; }

					if( ( ( b === d ) && ( r === a/c ) ) || ( ( b === c ) && ( r === a/d ) ) || ( ( a === d ) && ( r === b/c ) ) || ( ( a === c ) && ( r === b/d ) ) ){
						total *= 10*a+b;
						total /= 10*c+d;
					}
				}
			}
		}
	}

	return 1/total;
};