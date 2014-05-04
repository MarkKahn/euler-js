module.exports = function(){
	var          t = 1
	  , factorials = [ 1, t*=1, t*=2, t*=3, t*=4, t*=5, t*=6, t*=7, t*=8, t*=9 ]
	  ,      total = 0
	  ;

	for( var i=10; i<10000000; i++ ){
		var sum = 0
		  , num = i
		  ;

		while( num ){
			sum += factorials[ num%10 ];
			num    = 0|num/10;
		}

		if( i === sum ){
			total += i;
		}
	}

	return total;
};