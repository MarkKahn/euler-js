module.exports = function(){
	var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ]
	  ,  ways = 0
	  ;

	for( var a=0; a<=200; a++ ){
		for( var b=0; b<=100; b++ ){
			if( ( a + 2*b ) > 200 ){ break;}

			for( var c=0; c<=40; c++ ){
				if( ( a + 2*b + 5*c ) > 200 ){ break;}

				for( var d=0; d<=20; d++ ){
					if( ( a + 2*b + 5*c + 10*d ) > 200 ){ break;}

					for( var e=0; e<=10; e++ ){
						if( ( a + 2*b + 5*c + 10*d + 20*e ) > 200 ){ break;}

						for( var f=0; f<=4; f++ ){
							if( ( a + 2*b + 5*c + 10*d + 20*e + 50*f ) > 200 ){ break;}

							for( var g=0; g<=2; g++ ){
								if( ( a + 2*b + 5*c + 10*d + 20*e + 50*f + 100*g ) > 200 ){ break;}

								for( var h=0; h<=1; h++ ){
									if( ( a + 2*b + 5*c + 10*d + 20*e + 50*f + 100*g + 200*h ) === 200 ){ ways++; }
								}
							}
						}
					}
				}
			}
		}
	}

	return ways;
};