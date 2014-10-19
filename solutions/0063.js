module.exports = function(){
	var ttl = 0
	  , pow, base, resLen
	  ;

	// note that I was using the bigint lib here, but by chance it happens to work without it
	// as long as we don't go to a power of 22 which is the exact limit at which the num.length
	// breaks down
	for( pow=1; pow<22; pow++ ){
		for( base=1; base<10; base++ ){
			var resLen = Math.pow( base, pow ).toString().length;

			if( resLen === pow ){
				ttl++;
			}else if( resLen > pow ){
				break;
			}
		}
	}

	return ttl;
};