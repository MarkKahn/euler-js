function *getTriangle(){
	var n = 1;

	while( n++ ){
		yield n * ( n + 1 ) / 2;
	}
}

function *getPentagonal(){
	var n = 1;

	while( n++ ){
		yield n * ( 3*n - 1 ) / 2;
	}
}

function *getHexagonal(){
	var n = 1;

	while( n++ ){
		yield n * ( 2*n - 1 );
	}
}

module.exports = function(){
	var   next = 40756
	  ,    tri = getTriangle()
	  ,    pen = getPentagonal()
	  ,    hex = getHexagonal()
	  , triVal = 0
	  , penVal = 0
	  , hexVal = 0
	  ;

	while( true ){
		while( next > triVal ){ triVal = tri.next().value; }
		while( next > penVal ){ penVal = pen.next().value; }
		while( next > hexVal ){ hexVal = hex.next().value; }

		if( triVal === next && penVal === next && hexVal === next ){ return next; }
		next = Math.max( triVal, penVal, hexVal );
	}
}