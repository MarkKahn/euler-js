module.exports = function(){
	var powers = [
		  Math.pow( 0, 5 )
		, Math.pow( 1, 5 )
		, Math.pow( 2, 5 )
		, Math.pow( 3, 5 )
		, Math.pow( 4, 5 )
		, Math.pow( 5, 5 )
		, Math.pow( 6, 5 )
		, Math.pow( 7, 5 )
		, Math.pow( 8, 5 )
		, Math.pow( 9, 5 )
	]
	  , totalSum = 0;

	for( var i=10; i<500000; i++ ){
		var num = i
		  , sum = 0
		  ;

		while( num > 0 ){
			sum += powers[ num%10 ];
			num  = 0| num / 10;
		}

		if( sum === i ){
			totalSum += sum;
		}
	}

	return totalSum;
};