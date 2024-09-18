// Selecting the required elements
const btnAgain = document.querySelector(".again");
const secretNumber = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

// Initial game values
let magicNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20; // Starting score
let highScoreValue = 0; // Initialize high score

// Event listener for the "Check!" button
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess); // For debugging purposes

  // If no number is entered
  if (!guess) {
    message.textContent = "🚫 No Number";
  }
  // If the guess is correct
  else if (guess === magicNumber) {
    message.textContent = "🎉 Correct Number!";
    secretNumber.textContent = magicNumber;
    secretNumber.style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Update high score if the current score is higher
    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
      highScore.textContent = highScoreValue;
    }
  }
  // If the guess is wrong (too high or too low)
  else if (guess > magicNumber || guess < magicNumber) {
    if (scoreValue > 1) {
      // Show whether the guess was too high or too low
      message.textContent = guess > magicNumber ? "📈 Too High" : "📉 Too Low";
      scoreValue--; // Decrease the score for an incorrect guess
      score.textContent = scoreValue;
    } else {
      // Game over when the player runs out of score
      message.textContent = "💥You lose the game!";
      document.querySelector("body").style.backgroundColor = "red";
      score.textContent = 0;
    }
  }
});

// Event listener for the "Again!" button to reset the game
btnAgain.addEventListener("click", function () {
  scoreValue = 20; // Reset score
  magicNumber = Math.trunc(Math.random() * 20) + 1; // Generate new random number
  message.textContent = "Start guessing...";
  score.textContent = scoreValue;
  secretNumber.textContent = "?"; // Reset secret number display
  guess.value = ""; // Clear input field

  // Reset styles
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
});
