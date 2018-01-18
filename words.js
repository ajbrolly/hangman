// import letters.js
var letters = require('./letters');
var game = require('./main');

// Words players can guess
var words = ['Superman', 'Batman', 'Wonder\xa0Woman', 'Captain\xa0America', 'Iron\xa0Man', 'Black\xa0Widow', 'Incredible\xa0Hulk'];

// randomWord = null;

var ChooseWord = function () {
    this.randomWord = words[Math.floor((Math.random() * (words.length + 1)))];
    // console.log(this.randomWord);
    this.lettersOfWord = this.randomWord.split('');
    console.log(this.lettersOfWord);
    this.matchLetters = [];
    this.guessLeft = [];
    this.totalGuesses = 10;
    this.letterGuess = null;
    this.blankWordView = function () {
        // We start with an empty string.
        var wordBlanks = '';
        // Loop through the letters of the word we are trying to guess..
        for (var i = 0; i < this.lettersOfWord.length; i++) {
            // If the current letter has been guessed, display that letter.
            if (this.matchLetters.indexOf(this.lettersOfWord[i]) !== -1) {
                wordBlanks += this.lettersOfWord[i];
                if (this.lettersOfWord[i] === ' ') {
                    wordBlanks += '\xa0.\xa0';
                } else {
                    wordBlanks += "\xa0_\xa0";
                }
            }
            // If it hasn't been guessed, display a "_" instead.
            else {
                if (this.lettersOfWord[i] === ' ') {
                    wordBlanks += '\xa0';
                } else {
                    wordBlanks += "\xa0_\xa0";
                }
            }
        }
        console.log(wordBlanks);
    };
    this.checkLetters = function (letter) {
        for (var j = 0; j < this.lettersOfWord.length; j++) {
            // If the guessed letter is in the solution, and we haven't guessed it already..
            if ((letter === this.lettersOfWord[j]) && (this.matchLetters.indexOf(letter) === -1)) {
                // Push the newly guessed letter into the matchedLetters array.
                this.matchLetters.push(letter);
                console.log(this.matchLetters);
            }
        }
    }
};

module.exports = ChooseWord;