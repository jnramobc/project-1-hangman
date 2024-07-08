/*-------------------------------- Constants --------------------------------*/
const wordsList = ["Babble","Babies","Beagle","Pacify","Wacked",
                   "Yachts","Puzzle","Fizzed","Snazzy","Dazzle"]

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
   /|\    |
          |
          |
  =========`, `
    +---+
    |     |
    O     |
   /|\    |
   /      |
          |
  ========= `, `
    +---+
    |     |
    O     |
   /|\    |
   / \    |
          |
  ========= `]

/*---------------------------- Variables (state) ----------------------------*/

let lettersLeft = 26;
let turnsLeft= 6;
let hangmanStatus = hangmanPictures[0];
let letterChoice;
let randomWord;
/*------------------------ Cached Element References ------------------------*/

const displayMessageEl = document.querySelector('#display-message');
const alphaSelectorEl = document.querySelectorAll('.box');
const spaceLinesEl = document.querySelectorAll('.line');
const bodyElement = document.querySelector("body");
const sectionEl = document.querySelector('.spaceman-lines')
let divElement = document.querySelector('.hangmen')
/*-------------------------------- Functions --------------------------------*/
function pickWord(list) {
  const idx = Math.floor(Math.random() * wordsList.length)
  randomWord = list[idx]
  return randomWord
}

pickWord(wordsList)

divElement.textContent = hangmanPictures[0];
sectionEl.before(divElement);

const getLetterchoice = () => {
    
}

const updateDisplay = () => {
    if (turnsLeft >=1) 
        displayMessageEl.textContent = "Choose a letter"
}

updateDisplay()
let chooseLetter = () => {

}
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.box').addEventListener('click', chooseLetter)


