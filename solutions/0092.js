module.exports = function(){
	var to89 = { 89:1 }
	  ,  to1 = {  1:1 }
	  ;

	for( var i=1; i<10000000; i++ ){
		var numbers = [ i ]
		  ,     num = i;

		while( !to1[ num ] && !to89[ num ] ){
			num = num.toString().split( '' ).reduce( function(a,b){ return a+b*b; }, 0 );
			numbers.push( num );
		}

		// store all numbers in the chain in either the 1 or 89 hashes
		for( var j=0; j<numbers.length; j++ ){
			( to1[ num ] ? to1 : to89 )[ numbers[j] ] = 1;
		}
	}

	return Object.keys( to89 ).length;
};