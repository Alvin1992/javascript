//compare the min

var choices = [
    [10, "apples"],
    [20, "oranges"],
    [70, "bananas"]
  ]

function pickChoice() {
  var rand = Math.random() * 100, pick, choice, i;
  // go through choices, update pick if rand is above bottom threshold
  for ( i = 0, len = choices.length; i < len; i++ ) {
    choice = choices[i];
    if ( rand > choice[0] ) {
      pick = choice;
    }
  }
  return pick;
}