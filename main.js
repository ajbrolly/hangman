
var inquirer = require('inquirer');
var ChooseWord = require('./words');
var Letters = require('./letters');

function start() {
    inquirer.prompt({
        name: "begin",
        type: "list",
        message: "Do you want to start a new game?",
        choices: ["YES", "NO"]
    }).then(function (answer) {
        // If the player selects 'YES' to start a game
        if (answer.begin.toUpperCase() === "YES") {
            console.log('----------------------------------------------');
            console.log('LET\'S PLAY! Here\'s your first word to guess:');
            console.log('----------------------------------------------');
            var words = new ChooseWord();
            words.blankWordView();
            inquirer.prompt({
                name: "guess",
                type: "input",
                message: "Guess a letter:"
            }).then(function (answer) {
                console.log(answer);
                words.checkLetters();
            });
        }
        else {
            console.log('-----------------------------------------');
            console.log('OK, come back when you are ready to play!');
            console.log('-----------------------------------------');
        }
    });
}

start();