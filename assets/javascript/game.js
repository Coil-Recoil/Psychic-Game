
//Letters

var possibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var index = Math.floor(Math.random()*possibles.length);
var psychic=possibles[index];
console.log(index);
console.log(psychic);

//Counters

var wins = 0;
var loss = 0;
var remaining = 10;
var guessed = [];
var userInput;

document.onkeyup = function(event){ 
userInput = event.key;
guessed.push(userInput);
document.getElementById("guessed").innerHTML = guessed;
console.log(userInput);

//Rules

if (userInput === psychic){ 
wins++;
reset();
document.getElementById("wins").innerHTML = wins;
alert("You Won!");
}

else {remaining--;
console.log("remaining: "+ remaining);
document.getElementById("remaining").innerHTML = remaining;
}

if (remaining === 0){
loss++;
reset();
document.getElementById("loss").innerHTML = loss;
document.getElementById("remaining").innerHTML = remaining;
document.getElementById("guessed").innerHTML = guessed;
alert("You Lost!");
}
};

function reset()
{remaining = 10;
guessed=[];
};
