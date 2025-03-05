let random = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guesses");
const submit = document.querySelector("#submitbtn");
const guessSlot = document.querySelector(".guess");
const remaining = document.querySelector(".lastResult");
const p = document.createElement("p");
const startOver = document.querySelector(".paraResult");

const loworHigh = document.querySelector(".loworhigh");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}
function validGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number ");
  } else if (guess < 1) {
    alert("please enter a  number more than one ");
  } else if (guess > 100) {
    alert("please enter a  number less than hundered ");
  } else {
    prevGuess.push(guess);
  }
  if (numGuess > 10) {
    displayGuess(guess);
    displayMessage(`gameover and the random number was ${random}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`you have guesssed the right number`);
    endGame();
  } else if (guess < random) {
    displayMessage(`you have entered too low number`);
  } else if (guess > random) {
    displayMessage(`you have entered too high number`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  loworHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id ="new-game">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector("#new-game");
  newGamebtn.addEventListener("click", function () {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
