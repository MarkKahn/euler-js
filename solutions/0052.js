module.exports = function(){
	var      x = 1
	  , digits = 1
	  , sorted
	  ;

	while( x ){
		if( !/^1(?![7-9])/.test( x ) ){
			x = +( '1' + new Array( ++digits + 1 ).join( '0' ) );
		}

		sorted = x.toString().split( '' ).sort().join( '' );

		if(
			   ( ( 2*x ).toString().split( '' ).sort().join( '' ) !== sorted )
			|| ( ( 3*x ).toString().split( '' ).sort().join( '' ) !== sorted )
			|| ( ( 4*x ).toString().split( '' ).sort().join( '' ) !== sorted )
			|| ( ( 5*x ).toString().split( '' ).sort().join( '' ) !== sorted )
			|| ( ( 6*x ).toString().split( '' ).sort().join( '' ) !== sorted )
		){
			x++;
			continue;
		}

		return x;
	}
}