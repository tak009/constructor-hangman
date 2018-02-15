var Letter = function(letter) {
  this.letter = letter;
  this.moviesArr = ["aladdin", "braves", "cars", "dinosaur", "frozen", "lava", "madagascar", "minions", "moana", "mulan", "pinocchio", "pocahontas", "ratatouille", "rango", "rio", "shrek", "sing", "tangled", "tarzan", "zootopia"];
  this.maxGuesses = 12;
  this.lettersGuessedArr = [];
  this.winsCounter = 0;
  this.newWord = this.moviesArr[Math.floor(Math.random() * this.moviesArr.length)];
  this.underscoresArr = [];
  this.letterFound = -99;
  this.isCompleted = -99;
}


Letter.prototype.displayUnderscores = function() {
  // Display underscores _ _ (string), number of underscores must match with number of letters in the selected word
  var underscores = this.newWord.replace(/./g, "_ ");
  // Convert string to array --> ["_","_","_"]
  this.underscoresArr = underscores.trim().split(" ");
  console.log(underscores + "\n");

  return this.newWord;

}

Letter.prototype.checkGuessedLetter = function() {
  this.letterFound = this.lettersGuessedArr.indexOf(this.letter);
  this.isCompleted = this.underscoresArr.indexOf("_");

  if (this.letterFound === -1 && this.isCompleted !== -1 && this.maxGuesses > 0) {
    // Store capitalized letter in the lettersGuessed array
    this.lettersGuessedArr.push(this.letter);
    console.log("Correct!!");
  }
  else {
    console.log("Incorrect!!");
    //return;
  }

  if(this.lettersGuessedArr.length <= this.maxGuesses){
    //this.newWord.checkLetter();
  }

  if(this.lettersGuessedArr.length <= this.maxGuesses) {
     console.log(this.maxGuesses-this.lettersGuessedArr.length);
     console.log(this.lettersGuessedArr);
  }


var lastLetterGuessed = this.lettersGuessedArr[this.lettersGuessedArr.length - 1];
  // Check if the last letter guessed matches with any letter in the word
  for (var i = 0; i < this.newWord.length; i++) {
    var capLetter = this.newWord[i].toUpperCase();

    if (lastLetterGuessed === capLetter) {
      // Replace "_" by the correct letter e.g. ["_","_","_"] --> ["A","_","_"]
      this.underscoresArr[i] = this.underscoresArr[i].replace("_", capLetter);
      var correctAnswer = underscoresArr.join("");
      // Remove correct guessed letter from lettersGuessedArr
      this.lettersGuessedArr.pop(lastLetterGuessed);
    }
  }

  if (correctAnswer === this.newWord.toUpperCase()) {
    this.winsCounter++;
  }

  console.log(underscoresArr.join(" "));
  console.log("winsCounter",this.winsCounter);
}


// var myletter = new Letter('i', ["a"]);
// myletter.displayUnderscores();
// myletter.checkGuessedLetter();

module.exports = Letter;
