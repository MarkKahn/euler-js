module.exports = function(){
	var   maxP = 0
	  , maxTtl = 0
	  ;

	for( var p=3; p<=1000; p++ ){
		var maxSide = p/2 - 1
		  ,     ttl = 0
		  ;

		for( var a=1; a<= maxSide; a++ ){
			for( var b=1; b<= maxSide; b++ ){
				if( a+b+Math.pow( a*a+b*b, 0.5) === p ){
					ttl++;
				}
			}
		}

		if( ttl > maxTtl ){
			maxTtl = ttl;
			maxP   = p;
		}
	}

	return maxP;
}