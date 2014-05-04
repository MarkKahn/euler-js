module.exports = function(){
	var a, b, c;

	loop:
	for( a=1; a<998; a++ ){
		for( b=a+1; (a+b)<999; b++ ){
			c = 1000-a-b;

			if( c*c - b*b - a*a === 0 ){
				return a*b*c;
				break loop;
			}
		}
	}
};