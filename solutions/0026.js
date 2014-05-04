module.exports = function(){
	var maxLen = 0, maxNum;

	for( var i=999; i>=1; i-- ){
		if( i<maxLen ){ continue; }

		var remainders = {}
		  ,        len = 0
		  ,        val = 1
		  ;

		while( val && !remainders[ val ] ){
			remainders[ val ] = len++;
			val = val*10%i;
		}

		if( len - remainders[ val ] > maxLen ){
			maxLen = len - remainders[ val ];
			maxNum = i;
		}
	}

	return maxNum;
};