/*
Triangle	 	P3,n=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Square	 		P4,n=n2	 			1, 4, 9, 16, 25, ...
Pentagonal	 	P5,n=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	P6,n=n(2n−1)	 	1, 6, 15, 28, 45, ...
Heptagonal	 	P7,n=n(5n−3)/2	 	1, 7, 18, 34, 55, ...
Octagonal	 	P8,n=n(3n−2)	 	1, 8, 21, 40, 65, ...
*/

module.exports = {
	    triangle : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*(n+1)/2;   } ); }
	,     square : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*n;         } ); }
	, pentagonal : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*(3*n-1)/2; } ); }
	,  hexagonal : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*(2*n-1);   } ); }
	, heptagonal : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*(5*n-3)/2; } ); }
	,  octagonal : function( nTerms, limit ){ return polygonalSet( nTerms, limit, function( n ){ return n*(3*n-2);   } ); }
};

function polygonalSet( nTerms, limit, generator ){
	var terms = []
	  , term, hash
	  ;

	if( !nTerms && limit ){
		nTerms = 1000000;
	}

	for( var i=0; i<nTerms; i++ ){
		terms.push( term = generator( i+1 ) );

		if( limit && ( term > limit ) ){
			terms.pop();
			break;
		}
	}

	terms.getHash = function(){
		if( hash ){ return hash; }

		hash = {};
		for( var i=0, l=terms.length; i<l; i++ ){
			hash[ terms[i] ] = 1;
		}

		return hash;
	};

	return terms;
}