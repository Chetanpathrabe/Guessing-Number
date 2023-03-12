var secretNumber = Math.floor(Math.random() * 100) + 1;

var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");

var answer = Math.floor(Math.random()*100) * 1;
var no_of_guesses = 0;
var guessed_nums = [];

function checkGuess() {
  
  var guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
		feedback.innerHTML = "Please enter a valid number between 1 and 100.";
	} else {
		guessed_nums.push(guess);
    no_of_guesses += 1;

  if (guess == secretNumber) {
    document.getElementById("result").innerHTML = "Correct!";
  } else if (guess > secretNumber) {
    document.getElementById("result").innerHTML = "Too high!";
    msg1.textContent = "No. of guesses: " + no_of_guesses;
    msg2.textContent = "Guessed numbers are: " + guessed_nums;
  } else {
    document.getElementById("result").innerHTML = "Too low!";
    msg1.textContent = "No. of guesses: " + no_of_guesses;
    msg2.textContent = "Guessed numbers are: " + guessed_nums;
  }
}
}
