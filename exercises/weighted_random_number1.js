//compare min and max

var choices = [
    [10, "apples"],
    [20, "oranges"],
    [70, "bananas"]
  ],
  rand, min, max, i, i2, choice;

function between(x, min, max) {
  return x >= min && x <= max;
}

function pickChoice() {

    rand = Math.floor(Math.random() * 100);
  choice = -1;

  for (i = 0; i < choices.length; i++) {

    // set up min
    if (i === 0) {
      min = 0;
    } else {
      min = 0;
      // add up all the values so far
      for (i2 = 0; i2 < i; i2++) {
        min += choices[i2][0];
      }
      // one higher
      min++;
    }

    // set up max
    if (i === 0) {
      max = choices[i][0];
    } else {
      max = 0;
      // add up all the values so far
      for (i2 = 0; i2 < i + 1; i2++) {
        max += choices[i2][0];
      }
    }

    if (rand >= min && rand <= max) {
      choice = i;
      break;
    }

  }

  // If the choice is still -1 here, something went wrong...

};

  pickChoice();
  choices[choice][1];
