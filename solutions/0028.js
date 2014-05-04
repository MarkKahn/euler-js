module.exports = function(){
	var     n = 1
	  ,  size = 1
	  , total = 1
	  , step
	  ;

	while( size < 1001 ){
		total += ( n+= size+1 ) + ( n+= size+1 ) + ( n+= size+1 ) + ( n+= size+1 );
		size += 2;
	}

	return total;
};