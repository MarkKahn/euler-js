module.exports = function(){
	var names = require( '../resources/0022-names' );
	names.sort();

	var ttl = 0
	  , i, l, j, m, sum
	  ;

	for( i=0, l=names.length; i<l; i++ ){
		sum = 0;
		for( j=0, m=names[i].length; j<m; j++ ){
			sum += names[i].charCodeAt(j)-64;
		}

		ttl += ( i+1 ) * sum;
	}

	return ttl;
};