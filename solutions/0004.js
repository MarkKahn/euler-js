module.exports = function(){
	var max = 0
	  , x, y, num
	  ;

	for( x=900; x<1000; x++ ){
		for( y=900; y<1000; y++ ){
			num = x*y;
			if( ( num > max ) && ( num == ( num + '' ).split( '' ).reverse().join( '' ) ) ){
				max = num;
			}
		}
	}

	return max;
};