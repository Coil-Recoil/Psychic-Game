
//Letters

var possibles = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};

var psychic = Math.random[possibles];


//Counters

var wins = 0;

var loss = 0;

var remaining = 10;

var guessed = [];
document.getElementById("list").innerHTML = guessed

onclick function userInput() {
    guessed.push(userInput);
    document.getElementById("list").innerHTML = guessed;
}


//Rules

if userInput === psychic 
then wins = + 1
then alert = "You Won!"

else remaining = -1

if remaining = 0
then loss = + 1
then alert = "You Lost!"



