/*-------------------------------- Constants --------------------------------*/
const wordsList = ["astronaut", "comet", "galaxy", "meteor", "nebula", "orbit", "planet",
    "satellite", "solar", "spaceship", "star", "supernova", "telescope", 
    "universe", "venus", "gravity", "cosmos", "eclipse", "astronomy", 
    "blackhole", "milkyway", "constellation", "spacesuit", "launchpad"];

const hangmanPictures = [`
    +---+
    |     |
          |
          |
          |
          |
  =========`, `
    +---+
    |     |
    O     |
          |
          |
          |
  =========`, `
    +---+
    |     |
    O     |
    |     |
          |
          |
  =========`, `
    +---+
    |     |
    O     |
   /|     |
          |
          |
  ========= `, `
    +---+
    |     |
    O     |
   /|\\    |
          |
          |
  =========`, `
    +---+
    |     |
    O     |
   /|\\    |
   /      |
          |
  ========= `, `
    +---+
    |     |
    O     |
   /|\\    |
   / \\    |
          |
  ========= `];


/*---------------------------- Variables (state) ----------------------------*/

let wrongGuesses= 0;
const guessedLetters = [];
const maxWrongGuesses = hangmanPictures.length - 1;
const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();
/*------------------------ Cached Element References ------------------------*/

const wordContainer = document.querySelector('.spaceman-lines');
const messageElement = document.getElementById('display-message');
const hangmanElement = document.querySelector('.hangmen');
const alphaButtons = document.querySelectorAll('#alpha-selector button');
/*-------------------------------- Functions --------------------------------*/

const updateDisplayedWord = () => {
  wordContainer.innerHTML = '';
  for (let i = 0; i < randomWord.length; i++) {
      const letterDiv = document.createElement('div');
      letterDiv.classList.add('line');
      if (guessedLetters.includes(randomWord[i])) {
          letterDiv.textContent = randomWord[i];
      } else {
          letterDiv.textContent = '_';
      }
      wordContainer.appendChild(letterDiv);
  }
}

const updateMessage = (message) => {
  messageElement.textContent = message;
}

const updateHangmanPicture = () => {
  hangmanElement.innerHTML = `<pre>${hangmanPictures[wrongGuesses]}</pre>`;
}

const handleGuess = (letter) => {
  if (guessedLetters.includes(letter) || wrongGuesses >= maxWrongGuesses) {
      return; 
  }

  guessedLetters.push(letter);

  if (randomWord.includes(letter)) {
      updateDisplayedWord();
      if (randomWord.split('').every(char => guessedLetters.includes(char))) {
          updateMessage('Congratulations! You saved the spaceman!');
      } else {
          updateMessage('Choose a letter');
      }
  } else {
      wrongGuesses++;
      updateHangmanPicture();
      if (wrongGuesses >= maxWrongGuesses) {
          updateMessage(`Game Over! The spaceman is lost. The word was "${randomWord}". Refresh to play again!`);
          updateDisplayedWord();  
      } else {
          updateMessage('Choose a letter');
      }
  }
}

const init = () => {
  updateDisplayedWord();
  updateMessage('Guess the word to save the spaceman, choose a letter!');
  updateHangmanPicture();
}

init ()
/*----------------------------- Event Listeners -----------------------------*/
alphaButtons.forEach(button => {
  button.addEventListener('click', () => {
      handleGuess(button.textContent.toUpperCase());
      button.disabled = true; // Disable button after click
  });
});

