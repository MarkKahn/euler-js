var polygonal = require( 'polygonal-numbers' );

// solution is incomplete -- it spits out a list of possible answers

module.exports = function(){
	var   triangle = polygonal.triangle  ( 0, 10000 ).getHash()
	  ,     square = polygonal.square    ( 0, 10000 ).getHash()
	  , pentagonal = polygonal.pentagonal( 0, 10000 ).getHash()
	  ,  hexagonal = polygonal.hexagonal ( 0, 10000 ).getHash()
	  , heptagonal = polygonal.heptagonal( 0, 10000 ).getHash()
	  ,  octagonal = polygonal.octagonal ( 0, 10000 ).getHash()
	  , mI, mJ, mK, mL, mM, mN
	  ;

	function match( n ){
		return (
			triangle  [ n ] ? 1 :
			square    [ n ] ? 2 :
			pentagonal[ n ] ? 3 :
			hexagonal [ n ] ? 4 :
			heptagonal[ n ] ? 5 :
			octagonal [ n ] ? 6 :
			0
		);
	}

	for( var i=10; i<=99; i++ ){
		for( var j=10; j<=99; j++ ){
			if( !match( i+''+j ) ){ continue; }

			for( var k=10; k<=99; k++ ){
				if( !match( j+''+k ) ){ continue; }

				for( var l=10; l<=99; l++ ){
					if( !match( k+''+l ) ){ continue; }

					for( var m=10; m<=99; m++ ){
						if( !match( l+''+m ) ){ continue; }

						for( var n=10; n<=99; n++ ){
							if( !match( m+''+n ) ){ continue; }
							if( !match( n+''+i ) ){ continue; }

							// at this point, all numbers are at least polygonal, we just have to determine
							// whetehr each type is represented by a different number

							var nums = [ i+''+j, j+''+k, k+''+l, l+''+m, m+''+n, n+''+i ]
							  , mask = 0;

							for( var a=0; a<6; a++ ){
								triangle  [ nums[a] ] && ( mask |= Math.pow( 2, 0 ) );
								square    [ nums[a] ] && ( mask |= Math.pow( 2, 1 ) );
								pentagonal[ nums[a] ] && ( mask |= Math.pow( 2, 2 ) );
								hexagonal [ nums[a] ] && ( mask |= Math.pow( 2, 3 ) );
								heptagonal[ nums[a] ] && ( mask |= Math.pow( 2, 4 ) );
								octagonal [ nums[a] ] && ( mask |= Math.pow( 2, 5 ) );
							}

							if( mask !== 63 ){ continue; }

							console.log( eval( i+''+j + '+' + j+''+k + '+' + k+''+l + '+' + l+''+m + '+' + m+''+n + '+' + n+''+i ) );
						}
					}
				}
			}
		}
	}
};