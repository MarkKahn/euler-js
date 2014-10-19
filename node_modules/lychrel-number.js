module.exports = function( n, limit ){
	limit || ( limit = 50 );

	var counter = 0;

	while( counter<limit ){
		n += +n.toString().split( '' ).reverse().join( '' );
		if( n == n.toString().split( '' ).reverse().join( '' ) ){
			return false;
		}

		counter++;
	}

	return true;
};