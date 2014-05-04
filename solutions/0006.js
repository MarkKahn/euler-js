module.exports = function(){
	var s1 = 0
	  , s2 = 0
	  , i
	  ;

	for( i=1; i<=100; i++ ){
		s1 += i*i;
		s2 += i;
	}

	return s2*s2-s1;
};