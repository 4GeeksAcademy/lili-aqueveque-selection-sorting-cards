/* eslint-disable */
import "bootstrap";
import "./style.css";
document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

window.onload = function() {
  const drawCards = document.querySelector(".draw-button");

  drawCards.addEventListener("click", generateCards);

  function generateRandomCard() {
    const symbols = ["♠", "♣", "♦", "♥"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const color = symbol === "♠" || symbol === "♣" ? "black" : "red";

    return { symbol, value, color };
  }
  const cards = [];
  function generateCards() {
    const numberOfCards = document.getElementById("numberOfCardsInput").value;
    const cardsContainer = document.getElementById("cardsContainer");
    const sortedCardsContainer = document.getElementById("sortedCards");
    // Clear the cards container before adding new cards
    cardsContainer.innerHTML = "";

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
          cardDetails.textContent = `${card.value}`;
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

  // Bubble sort the cards
  const sortedCards = cards.slice();
  for (let i = 0; i < sortedCards.length - 1; i++) {
    for (let j = 0; j < sortedCards.length - 1 - i; j++) {
      if (sortedCards[j].value > sortedCards[j + 1].value) {
        //swap cards
        const temp = sortedCards[j]; //auxiliar
        sortedCards[j] = sortedCards[j + 1];
        sortedCards[j + 1] = temp;
      }
    }
  }

  // Display sorted cards
  sortedCardsContainer.textContent = "Sorted Cards: ";
  sortedCards.forEach(card => {
    const sortedCardElement = document.createElement("div");
    sortedCardElement.className = `card ${card.color}`;
    sortedCardElement.textContent = `${card.symbol} ${card.value}`;
    sortedCardsContainer.appendChild(sortedCardElement);
  });
};
