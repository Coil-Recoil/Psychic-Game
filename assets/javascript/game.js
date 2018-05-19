
//Letters

var possibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var psychic = Math.floor(Math.random()*possibles.length);

//Counters

var wins = 0;
var loss = 0;
var remaining = 10;
var guessed = [];
document.getElementById("guessed").innerHTML = guessed;

document.onkeyup = function(event){ 

var userInput = event.key;
{guessed.push(userInput)
}

//Rules

if (userInput === psychic){ 
{wins++ & reset()}
{document.getElementById("wins").innerHTML = wins;}
{alert("You Won!")}
}

else {remaining--}
{document.getElementById("remaining").innerHTML = remaining;}

if (remaining === 0){
{loss++ & reset()}
{document.getElementById("loss").innerHTML = loss;}
{document.getElementById("remaining").innerHTML = remaining;}
{document.getElementById("guessed").innerHTML = null;}
alert("You Lost!");
}

function reset()
{remaining=10;
guessed=[];
}