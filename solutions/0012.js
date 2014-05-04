var numOfDivisors = require( 'num-of-divisors' );

module.exports = function(){
	var   n = 1
	  , num = 1
	  , sqrt, factors, i
	  ;

	while( numOfDivisors( num ) < 500 ){
		num += ++n;
	}

	return num;
};