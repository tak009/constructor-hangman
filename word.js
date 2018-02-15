var Letter = require("./letter");

var Word = function(letter) {
  this.letter = letter;
  this.myNewWord = "";
}

Word.prototype.chooseNewWord = function() {
  var chooseNewWord = new Letter();
  this.myNewWord = chooseNewWord.displayUnderscores();
  console.log(this.myNewWord); //to be removed

}

//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.checkLetter = function(letter) {
  var checkLetter = new Letter(letter);
  checkLetter.checkGuessedLetter();
}



// var myWord = new Word();
// myWord.chooseNewWord();
// myWord.checkLetter();

module.exports = Word;
