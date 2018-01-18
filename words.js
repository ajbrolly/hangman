var Letters = require('./letters');

var hangmanGame = ['Superman', 'Batman', 'Wonder\xa0Woman', 'Captain\xa0America', 'Iron\xa0Man', 'Black\xa0Widow', 'Incredible\xa0Hulk'];

var ChooseWord = function () {
    this.randomWord = words[Math.floor((Math.random() * words.length) + 1)];
    this.lettersOfWord = this.randomWord.split('');
    this.matchLetters = [];
    this.guessLeft = [];
    this.totalGuesses = 10;
    this.letterGuess = null;
    this.blankWordView = function() {
        // We start with an empty string.
        var wordBlanks = '';
        // Loop through the letters of the word we are trying to guess..
        for (var i = 0; i < this.lettersOfWord.length; i++) {
            // If the current letter has been guessed, display that letter.
            if (this.matchLetters.indexOf(this.lettersOfWord[i]) !== -1) {
                wordBlanks += this.lettersOfWord[i];
            }
            // If it hasn't been guessed, display a "_" instead.
            else {
                wordBlanks += "\xa0_\xa0";
            }
        }
        // console.log(wordBlanks);
    }

    module.exports = {
        ChooseWord
    }
