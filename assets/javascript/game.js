var computerRandom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var guessPicks = [];

//I cannot figure out why this is not working!!! It should be. I spelled something wrong or captialized something!!
document.onkeyup = function (event) {
    var guess = event.key;
    var computer = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
        if (letters.indexOf(guess) > -1) {
        
        if (guess === computer) {
             wins ++;
            numberOfGuesses = 9;
            guessPicks = [];    
        }
      // Im trying to decrement here but it is not working. It does not like the semi colon
        if (guess != computer) {
            numberOfGuesses --;
                    guessPicks.push(guess);
        }
       
        if (numberOfGuesses === 000) {
            numberOfGuesses = 9
            losses ++;
            guessPicks = [];
        } 

    
        var html = 
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" + 
        "<p>Guesses Left: " + numberofGuesses + "</p>" + 
        "<p>Your guesses so far: " + guessPicks.join(", ") + "</p>";
         document.querySelector("#game").innerHTML = html; 
    }
}
