module.exports = function* permute( list, prefix ){
	if( list.length===1 ){
		yield prefix + list[0];
	}

	for( var i=list.length-1; i>=0; i-- ){
		var val = list.splice( i, 1 )[ 0 ];
		yield* permute( list, prefix + val );
		list.splice( i, 0, val );
	}
}