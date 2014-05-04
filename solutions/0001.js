module.exports = function(){
	var total = 0;

	for( var i=1; i<1000; i++ ){
		i%3 && i%5 || ( total += i );
	}

	return total;
}