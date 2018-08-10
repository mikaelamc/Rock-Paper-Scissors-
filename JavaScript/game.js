var options = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function(){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    var computerGuess = options[Math.floor(Math.random()*options.length)];

    console.log(computerGuess);

    if (userGuess == 'r' || userGuess == 'p' || userGuess == 's'){
        if ((userGuess==computerGuess)){
            ties++;
        }
        if ((userGuess == 'r') && (computerGuess == 's')){
            wins++;
        }
        if ((userGuess == 'r') && (computerGuess == 'p')){
            losses++;
        }
        if ((userGuess == 's') && (computerGuess == 'r')){
            losses++;
        }
        if ((userGuess == 'p') && (computerGuess == 'r')){
            wins++;
        }
        if ((userGuess == 's') && (computerGuess == 'p')){
            wins++;
        }
        if ((userGuess == 'p') && (computerGuess == 's')){
            losses++;
        }  
    }

    var html = "<p>Press r, p, or s to start playing</p>" +
    "<p> Computer Guess: " + computerGuess + "</p>" +
    "<p> Your Guess: " + userGuess + "</p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Ties: " + ties + "</p>";

    document.querySelector('#game').innerHTML = html;
 }