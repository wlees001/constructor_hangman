var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js');

var totalGuesses = 10;

prompt.start();


function newGame(entry) {
    console.log("Guesses Left: " + guesses);
    if (hangmanStart.currentWord.comparingWords( )== true)
    {
        console.log("You win");
        return; 
    }
    if (entry <= 0) {
        console.log("Game Over");
        return;
    }
}

console.log


var wordArray = ["strawberry", "chocolate", "vanilla"];

var wordChosen = wordArray[Math.floor(Math.random()*wordArray.length)]
var emptyArray = [];
var lettersInWord = wordChosen.split("");
var lettersUnderscored = [];
var lettersGuessed = "";
var letterLength = lettersInWord.length;
var numberOfGuesses = letterLength;

function Word(wordChosen, emptyArray, lettersInWord, lettersGuessed,) {
    this.wordChosen = wordChosen;
    this.emptyArray = emptyArray;
    this.lettersInWord = lettersInWord;
    this.lettersGuessed = lettersGuessed;
};

Word.prototype.underScore = function() {
    for (var i = 0; i < letterLength; i++) {
        emptyArray.push("_");
    } 
    console.log(emptyArray.join(" "));
};

var word = new Word(wordChosen, lettersGuessed, lettersInWord);
console.log(word.letterarray)

word.underScore();

var startGame = function() {
    inquirer.prompt([{

        name: "currentguess",
        type: "input",
        message: 'Guess a letter',
        // validate: function(entry) {
        //     if (entry == true) {
        //        console.log('true');
        //        return true;
        //     }
        //         console.log('false');
        //         return false;
        // }
    }]).then(function(res) {
        console.log("result: ", res);
        lettersGuessed = res.currentguess;
        var lengthOfWord = word.letterLength.length;
        var arrayWords = word.letterLength.length;

        console.log("wordChosen: ", wordChosen);
        console.log("letter Guessed: ", lettersGuessed);
        console.log("lettersInWord: ", lettersInWord);
        console.log("lengthOfWord: ", lengthOfWord);
        console.log("Hangman: ", emptyArray);
    })
}

var gameEnd = function() {
    if (emptyArray.toString() === lettersInWord.toString())
    {
        console.log(emptyArray.toString(), lettersInWord.toString())
        console.log("You are a winner! Not many have made it this far.");
        startGame();
    }
    else if (numberOfGuesses === 0)
    {
        inquirer.prompt([{
            type: "input",
            message: 'Out of Guesses!',
            name: "confirm",
            default: true
        }]).then(function(res) {

            if (res.confirm) {
                console.log("\nNow, for a new Game")
                startGame();
            } 
            else {
                console.log("\nUntil next time");
            }
        });
    }

}

startGame();
gameEnd();
