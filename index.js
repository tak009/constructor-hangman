var Word = require("./word");
var inquirer = require("inquirer");

var count = 12;

var askQuestion = function() {
  if (count > 0) {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter! [Hint: Disney's Animated Movies]"
      }

    ]).then(function(letter) {
      var lettersGuessedArr = ['a'];
      var underscoresArr = [];
      var userGuess = letter.guess.toUpperCase();

      var newWord = new Word(userGuess);
      newWord.chooseNewWord();
      var currentWord = newWord.myNewWord;
      console.log(currentWord.length);

      count--;
      askQuestion();

    });
  } else {
    console.log("You got it right! Next Word!");
  }
}

askQuestion();
