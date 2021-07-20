var main = function (input) {
  var computer = computerRoll();
  //any input other than rock, paper or scissors give this outputValue
  var myOutputValue = "Please input 'stone', 'paper' or 'scissors' to play.";
  // (1) Classic game
  // (1a) Classic Win
  if (
    (input == "scissors" && computer == "paper") ||
    (input == "paper" && computer == "stone") ||
    (input == "stone" && computer == "scissors")
  ) {
    myOutputValue =
      "You won! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Nice one!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (1b) Classic Loss
  if (
    (input == "scissors" && computer == "stone") ||
    (input == "paper" && computer == "scissors") ||
    (input == "stone" && computer == "paper")
  ) {
    myOutputValue =
      "You lost! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Better luck next time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (1c) Classic Draw
  if (
    (input == "scissors" && computer == "scissors") ||
    (input == "paper" && computer == "paper") ||
    (input == "stone" && computer == "stone")
  ) {
    myOutputValue =
      "It's a draw! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "No winners this time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2) Reversed Game
  // (2a) Reversed Win
  if (
    (input == "reversed scissors" && computer == "stone") ||
    (input == "reversed paper" && computer == "scissors") ||
    (input == "reversed stone" && computer == "paper")
  ) {
    myOutputValue =
      "You won! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Nice one!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2b) Reversed Loss
  if (
    (input == "reversed scissors" && computer == "paper") ||
    (input == "reversed paper" && computer == "stone") ||
    (input == "reversed stone" && computer == "scissors")
  ) {
    myOutputValue =
      "You lost! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "Better luck next time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }
  // (2c) Reversed Draw
  if (
    (input == "reversed scissors" && computer == "scissors") ||
    (input == "reversed paper" && computer == "paper") ||
    (input == "reversed stone" && computer == "stone")
  ) {
    myOutputValue =
      "It's a draw! You picked " +
      input +
      " and the computer picked " +
      computer +
      "." +
      "<br>" +
      "<br>" +
      "No winners this time!" +
      "<br>" +
      "<br>" +
      "Please input 'stone', 'paper' or 'scissors' to play again!";
  }

  return myOutputValue;
};

// computer rolls randomly
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randomRoll = randomInteger + 1;
  console.log("Random Number 1-3");
  console.log(randomRoll);
  var computerRoll = "scissors";
  // Paper = 2
  if (randomRoll == 2) {
    computerRoll = "paper";
  }
  // Stone = 3
  if (randomRoll == 3) {
    computerRoll = "stone";
  }
  console.log("Computer's Roll");
  console.log(computerRoll);
  return computerRoll;
};
