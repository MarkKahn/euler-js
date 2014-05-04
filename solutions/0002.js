module.exports = function(){
	var sum = 0
	  ,   a = 2
	  ,   b = 1
	  ;

	for( ; a<4000000; sum+=a,b+=a,a+=b,a=-(b=(a+=b)-b)+a+b );

	return sum;
};