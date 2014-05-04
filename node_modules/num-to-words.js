module.exports = function( num ){
	var    ones = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]
	  ,    tens = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
	  , hundred = 'hundred'
	  ,  larger = [ 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion' ]
	  ,     and = ' and '
	  ,    dash = '-'
	  ,  digits = []
	  , n
	  ;

	n = num % 100;
	if( n===0 ){

	// push the last two digits
	}else if( n < 20 ){
		digits.unshift( ones[ n-1 ] );
	}else{
		if( n%10 ){
			digits.unshift( ones[ n%10-1 ] );
			digits.unshift( dash );
		}
		digits.unshift( tens[ (0|n/10)-2 ] );
	}

	if( n && num>100 ){
		digits.unshift( and );
	}

	// push the hundreds
	n = ( num%1000 - n ) / 100;
	if( n ){
		digits.unshift( hundred );
		digits.unshift( ' ' );
		digits.unshift( ones[ n-1 ] );
	}

	// will do this later
	if( num===1000 ){ return 'one thousand'; }

	return digits.join( '' );
};