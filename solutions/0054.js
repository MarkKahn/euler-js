var hands = require( '../resources/0054-poker.js' );

/* 1  High Card       : Highest value card.
 * 2  One Pair        : Two cards of the same value.
 * 3  Two Pairs       : Two different pairs.
 * 4  Three of a Kind : Three cards of the same value.
 * 5  Straight        : All cards are consecutive values.
 * 6  Flush           : All cards of the same suit.
 * 7  Full House      : Three of a kind and a pair.
 * 8  Four of a Kind  : Four cards of the same value.
 * 9  Straight Flush  : All cards are consecutive values of same suit.
 * 10 Royal Flush     : Ten, Jack, Queen, King, Ace, in same suit.
 */

function handValue( cards ){
	var  nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	  , suits = [0,0,0,0]
	  ;

	for( var i=0, l=cards.length; i<l; i++ ){
		nums[ {T:10, J:11, Q:12, K:13, A:14}[ cards[i][0] ] || +cards[i][0] ]++;
		suits[ {C:0, S:1, D:2, H:3}[ cards[i][1] ] ]++;
	}

	var  numsStr = nums.join( '' )
	  , suitsStr = suits.join( '' )
	  ;

	return (
		  /1{5}$/         .test( numsStr  ) ? [ 10 ]
		: (
		  /4/             .test( suitsStr ) &&
		  /1{5}/          .test( numsStr  )
		)                                   ? [ 9, numsStr.lastIndexOf( 1 ) ]
		: /4/             .test( numsStr  ) ? [ 8, numsStr.lastIndexOf( 4 ), numsStr.lastIndexOf( 1 ) ]
		: /(?=.*3)(?=.*2)/.test( numsStr  ) ? [ 7, numsStr.lastIndexOf( 3 ), numsStr.lastIndexOf( 2 ) ]
		: /5/             .test( suitsStr ) ? [ 6, numsStr.split( '' ).reverse().join( '' ) ]
		: /1{5}/          .test( numsStr  ) ? [ 5, numsStr.lastIndexOf( 1 ) ]
		: /3/             .test( numsStr  ) ? [ 4, numsStr.lastIndexOf( 3 ), numsStr.split( '' ).reverse().join( '' ) ]
		: /2.*2/          .test( numsStr  ) ? [ 3, numsStr.lastIndexOf( 2 ), numsStr.indexOf( 2 ), numsStr.indexOf( 1 ) ]
		: /2/             .test( numsStr  ) ? [ 2, numsStr.indexOf( 2 ), numsStr.split( '' ).reverse().join( '' ) ]
		: numsStr.split( '' ).reverse().join( '' )
	);
}

module.exports = function(){
	var wins = 0;

	outer:
	for( var i=0, l=hands.length; i<l; i++ ){
		var p1Value = handValue( hands[i].slice( 0, 5 ) )
		  , p2Value = handValue( hands[i].slice( 5 ) )
		  ;

		for( var j=0, m=p1Value.length; j<m; j++ ){
			if( p1Value[j] > p2Value[j] ){
				wins++;
			}

			if( p1Value[j] !== p2Value[j] ){
				continue outer;
			}
		}

		console.log( 'Error, should not get here', hands[i] );
	}

	return wins;
};