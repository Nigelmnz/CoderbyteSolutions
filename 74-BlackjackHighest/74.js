//Given an array of card names, return a string stating whether or not the array
//is below, above, or at a blackjack. Further, state what the highest card in the hand is.
'use strict';

function BlackjackHighest(cardArr) {
  var cardMap = generateCardRanks();
  var total = 0;
  var aceCount = 0;
  var highest = null;

  //Go through the hand and note the number of aces seen, the largest non-ace seen, and the running total. Assume aces are 11.
  for(let card of cardArr){
    var cardRank = cardMap[card];
    if(cardRank === undefined) throw "Bad card name: " + card;
    if(card === 'ace'){
      aceCount++;
      total += 11;
    }else{ //Non-ace
      if(highest === null || cardRank > cardMap[highest]) highest = card;
      total += Math.min(cardRank,10);
    }
  }

  //If we are over 21, we can revalue our aces to be 1's. Do so until we run out of aces, or are under 21.
  while(aceCount > 0 && total > 21){
    total -= 10;
    aceCount--;
  }

  //If there are cards, give our answer
  return (total > 0) ? blackjackSentence(total,aceCount,highest) : "No cards.";

  //**Helper Functions**//

  //Return the desired sentence
  function blackjackSentence(sum,aces,high){
    return isBlackjack(sum) + " " + ((aces > 0) ? 'ace' : high);
  }

  //Return the word corresponding with a hand sum
  function isBlackjack(sum){
    if(sum > 21){
      return 'above';
    }else if(sum < 21){
      return 'below';
    }else{
      return 'blackjack';
    }
  }

  //Creates an map of card rankings
  function generateCardRanks(){
    var cards = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];

    //Base the card's value on its index in the array
    return cards.reduce((result,card,i) => {
      result[card] = i + 2;
      return result;
    },{});
  }
}

console.log("Input:")
console.log(BlackjackHighest(process.argv.slice(2)))

console.log("Test Cases:")
console.log(BlackjackHighest(['two','three','four']) === 'below four');
console.log(BlackjackHighest(['four','ace','ten']) === 'below ten');
console.log(BlackjackHighest(['ace','queen']) === 'blackjack ace');
