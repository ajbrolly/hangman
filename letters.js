
var ChooseWord = require('./words');



var UpdateLetters = function (letter) {
    var words = new ChooseWord();
    words.blankWordView();
    // Loop through the letters of the "solution".
    for (var i = 0; i < this.lettersOfWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((letter === this.lettersOfWord[i]) && (this.matchLetters.indexOf(letter) === -1)) {
            // Push the newly guessed letter into the matchedLetters array.
            this.matchLetters.push(letter);
        }
    }
},
