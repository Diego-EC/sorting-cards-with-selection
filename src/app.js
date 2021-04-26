/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let arrDeck = [];
let log = [];

document.querySelector("#draw").addEventListener("click", () => {
  arrDeck = [];
  log = [];
  document.querySelector(".deck.unsorted").innerHTML = "";
  let deckSize = document.querySelector("#amount").value;
  let deck = document.querySelector(".deck.unsorted");
  for (let i = 0; i < deckSize; i++) {
    let randomCard = getRandomCard();
    arrDeck.push(randomCard);

    let cardElement = document.createElement("div");
    cardElement.className = "card " + randomCard.suit;
    cardElement.innerHTML = `<span>${randomCard.number}</span>`;
    deck.appendChild(cardElement);
  }

  document.querySelector(".solution-log").innerHTML = "";
});

document.querySelector("#sort").addEventListener("click", () => {
  let arrLog = selectSort(arrDeck);
  let solutionLog = document.querySelector(".solution-log");

  for (let i = 0; i < log.length; i++) {
    let solutionRowElement = document.createElement("li");
    solutionRowElement.innerHTML = `<i>${i}</i>`;
    let solutionDeckElement = document.createElement("div");
    solutionDeckElement.className = "deck";

    for (let j = 0; j < log[i].length; j++) {
      let cardElement = document.createElement("div");
      cardElement.className = "card " + log[i][j].suit;
      cardElement.innerHTML = `<span>${log[i][j].number}</span>`;
      solutionDeckElement.appendChild(cardElement);
    }

    solutionRowElement.appendChild(solutionDeckElement);

    solutionLog.appendChild(solutionRowElement);
  }
});

const getRandomCard = () => ({
  number: generateRandomCardNumber(),
  suit: generateRandomCardSuit()
});

const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min].number > arr[i].number) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        log.push(arr.slice(0));
      }
    }
    min++;
  }
  return arr;
};

const bubbleSort = arr => {
  let wall = arr.length - 1;
  let half = (arr.length - 1) / 2;
  while (wall > half) {
    let index = 0;
    while (index < wall) {
      if (arr[index].number > arr[index + 1].number) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        log.push(arr.slice(0));
      }
      index++;
    }
    wall--;
  }
  return arr;
};

function generateRandomCardSuit() {
  const arrSuits = ["heart", "spade", "club", "diamond"];

  let indexSuit = Math.floor(Math.random() * arrSuits.length);
  return arrSuits[indexSuit];
}

function generateRandomCardNumber() {
  const arrNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumber = Math.floor(Math.random() * arrNumbers.length);
  return arrNumbers[indexNumber];
}
