const quoteElement = document.getElementById('quote');
const inputElement = document.getElementById('input');
const startButton = document.getElementById('start');
const resultsElement = document.getElementById('results');

let startTime, endTime;

const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "I'm king of the world!",
  "You can't handle the truth!",
  "There's no place like home.",
  "May the Force be with you.",
  "You talking to me?",
  "Here's looking at you, kid.",
  "Hasta la vista, baby.",
  "Houston, we have a problem.",
  "Life is like a box of chocolates.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startGame() {
  const quote = getRandomQuote();
  quoteElement.innerText = quote;
  inputElement.value = '';
  inputElement.disabled = false;
  inputElement.focus();
  startButton.innerText = 'Restart';
  startTime = new Date();
}

function endGame() {
  inputElement.disabled = true;
  endTime = new Date();
  const timeDiff = endTime - startTime;
  const seconds = timeDiff / 1000;
  const numChars = quoteElement.innerText.length;
  const typedChars = inputElement.value.length;
  const accuracy = Math.round((typedChars / numChars) * 100);
  const wpm = Math.round((typedChars / seconds) * 60 / 5);
  resultsElement.innerText = `Time taken: ${seconds} seconds | Accuracy: ${accuracy}% | WPM: ${wpm}`;
}

startButton.addEventListener('click', function() {
  if (startButton.innerText === 'Start') {
    startGame();
  } else {
    endGame();
  }
});

inputElement.addEventListener('input', function() {
  const quote = quoteElement.innerText;
  const input = inputElement.value;
  if (quote.startsWith(input)) {
    inputElement.classList.remove('incorrect');
    inputElement.classList.add('correct');
  } else {
    inputElement.classList.remove('correct');
    inputElement.classList.add('incorrect');
  }
});

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    endGame();
  }
});
