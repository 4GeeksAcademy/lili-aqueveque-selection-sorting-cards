/* eslint-disable */
import "bootstrap";
import "./style.css";
document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

window.onload = function() {
  const drawCards = document.querySelector(".draw-button");
  //Sonidito:
  const cardSound = document.getElementById("cardSound");

  drawCards.addEventListener("click", generateCards);

  function generateRandomCard() {
    const symbols = ["♠", "♣", "♦", "♥"];
    const values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const color = symbol === "♠" || symbol === "♣" ? "black" : "red";

    return { symbol, value, color };
  }

  let cards = [];
  var sortedCards = [];
  const sortedCardsContainer = document.getElementById("sortedCards");

  function generateCards() {
    cardSound.play();
    // Clear the sorted cards container
    const numberOfCards = document.getElementById("numberOfCardsInput").value;
    const cardsContainer = document.getElementById("cardsContainer");

    // Clear the cards container before adding new cards
    cardsContainer.innerHTML = "";
    sortedCardsContainer.innerHTML = "";
    sortedCards = [];
    cards = [];

    //Generate random cards
    for (let i = 0; i < numberOfCards; i++) {
      const card = generateRandomCard();
      cards.push(card);

      //Create card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("div-size", "position-relative");

      for (let j = 0; j < 3; j++) {
        const cardDetails = document.createElement("div");
        if (j == 0) {
          cardDetails.classList.add("position-absolute", "upper", card.color);
          cardDetails.style.top = "4px"; // Adjust the top position as needed
          cardDetails.style.left = "5px"; // Adjust the left position as needed
          cardDetails.style.color = card.color;
          cardDetails.textContent = `${card.symbol}`;
        } else if (j == 1) {
          cardDetails.classList.add("position-absolute", "center", card.color);
          cardDetails.style.top = "50%"; // Center vertically
          cardDetails.style.left = "50%"; // Center horizontally
          cardDetails.style.transform = "translate(-50%, -50%)"; // Center the element
          cardDetails.style.color = card.color;
          if (card.value == "1") {
            cardDetails.textContent = `A`;
          } else if (card.value == "10") {
            cardDetails.textContent = `J`;
          } else if (card.value == "11") {
            cardDetails.textContent = `Q`;
          } else if (card.value == "12") {
            cardDetails.textContent = `K`;
          } else {
            cardDetails.textContent = `${card.value}`;
          }
        } else {
          cardDetails.classList.add("position-absolute", "lower", card.color);
          cardDetails.style.bottom = "4px"; // Adjust the bottom position as needed
          cardDetails.style.right = "5px"; // Adjust the right position as needed
          cardDetails.style.color = card.color;
          cardDetails.textContent = `${card.symbol}`;
        }
        cardElement.appendChild(cardDetails);
      }
      cardsContainer.appendChild(cardElement);
    }
  }

  let sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click", sortCards);

  function sortCards() {
    cardSound.play();
    sortedCards = [];
    sortedCardsContainer.innerHTML = "";
    let bubbleLog = document.getElementById("bubble-log");
    bubbleLog.innerHTML = "Bubble Log";

    // Bubble sort the cards
    sortedCards = cards.slice();
    let counter = 0;
    for (let i = 0; i < sortedCards.length - 1; i++) {
      for (let j = 0; j < sortedCards.length - 1 - i; j++) {
        if (parseInt(sortedCards[j].value) > sortedCards[j + 1].value) {
          // Swap cards
          const temp = sortedCards[j];
          sortedCards[j] = sortedCards[j + 1];
          sortedCards[j + 1] = temp;
        }
      }

      // Create a new row for sorted cards
      let sortedCardsRow = document.createElement("div");
      sortedCardsRow.className = "sorted-row";
      let firstCol = document.createElement("div");
      firstCol.textContent = counter;
      firstCol.className = "firstCol";
      sortedCardsRow.appendChild(firstCol);
      // Append sorted cards to the row
      sortedCards.forEach(card => {
        const sortedCardElement = document.createElement("div");
        sortedCardElement.classList.add(
          "div-size",
          "position-relative",
          card.color
        );
        for (let k = 0; k < 3; k++) {
          const sortedCardDetails = document.createElement("div");
          if (k === 0) {
            sortedCardDetails.classList.add("position-absolute", "upper");
            sortedCardDetails.style.top = "4px"; // Adjust the top position as needed
            sortedCardDetails.style.left = "5px"; // Adjust the left position as needed
            sortedCardDetails.textContent = `${card.symbol}`;
          } else if (k === 1) {
            sortedCardDetails.classList.add("position-absolute", "center");
            sortedCardDetails.style.top = "50%"; // Adjust the top position as needed
            sortedCardDetails.style.left = "50%"; // Adjust the left position as needed
            sortedCardDetails.style.transform = "translate(-50%, -50%)"; // Center the element
            if (card.value == "1") {
              sortedCardDetails.textContent = `A`;
            } else if (card.value == "10") {
              sortedCardDetails.textContent = `J`;
            } else if (card.value == "11") {
              sortedCardDetails.textContent = `Q`;
            } else if (card.value == "12") {
              sortedCardDetails.textContent = `K`;
            } else {
              sortedCardDetails.textContent = `${card.value}`;
            }
          } else {
            sortedCardDetails.classList.add("position-absolute", "lower");
            sortedCardDetails.style.bottom = "4px"; // Adjust the top position as needed
            sortedCardDetails.style.right = "5px"; // Adjust the left position as needed
            sortedCardDetails.textContent = `${card.symbol}`;
          }
          sortedCardElement.appendChild(sortedCardDetails);
        }
        sortedCardsRow.appendChild(sortedCardElement);
      });

      // Append the row to the sorted cards container
      sortedCardsContainer.appendChild(sortedCardsRow);

      counter++;
    }
  }
};
