let cards = [
];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
// const player = {
//   name: "Meow",
//   chips: ,
// };

const startgameElement = document.getElementById('js-startgame-button');
const newcardElement = document.getElementById('js-newcard-button');
const messageElement = document.getElementById('message-el');
const sumElement = document.querySelector('#sum-el');
const cardElement = document.getElementById('cards-el');
// const playerElement = document.getElementById('player-el');

// playerElement.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } 

  return randomNumber;
}

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardElement.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardElement.textContent += cards[i] + ' ';
  }

  sumElement.textContent = 'Sum: ' + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    hasBlackJack = false;
  }
  
  messageElement.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
  }

  if (hasBlackJack) {
    hasBlackJack = false;
  }

  renderGame();
}


startgameElement.addEventListener('click', () => {
  startGame();
});

newcardElement.addEventListener('click', () => {
  newCard();
})
