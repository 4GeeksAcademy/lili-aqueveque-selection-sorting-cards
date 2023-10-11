/* eslint-disable */
import "bootstrap";
import "./style.css";
document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

window.onload = function() {
  // Get the input element and submit button
  const numberOfCardsInput = document.getElementById("numberOfCardsInput");
  const submitButton = document.getElementById("submitButton");
  const rowOriginal = document.getElementById("rowOriginal");

  // Function to create card objects
  function createCardObject(upperIcon, centerIcon, lowerIcon) {
    return {
      upperIcon: upperIcon.textContent,
      centerIcon: centerIcon.textContent,
      lowerIcon: lowerIcon.textContent
    };
  }

  // Add event listener for the submit button click event
  submitButton.addEventListener("click", function() {
    // Get the number of cards from the input value
    let numberOfCards = parseInt(numberOfCardsInput.value);
    numberOfCards = numberOfCards >= 3 ? numberOfCards : 3;

    // Get the number of existing cards
    let existingCardsCount = rowOriginal.children.length;

    // Calculate the number of additional cards needed
    let cardsNeeded = numberOfCards - existingCardsCount;

    if (cardsNeeded > 0) {
      // Get the first card element to clone
      const existingCard = rowOriginal.querySelector(".firstChild");

      // Clone and append the additional cards
      for (let j = 0; j < cardsNeeded; j++) {
        // Clone the first card element (not its children)
        const clonedCard = existingCard.cloneNode(true);

        // Append the cloned card element to the parent
        rowOriginal.appendChild(clonedCard);
      }
    }

    let card = document.querySelector(".card-frame");
    let upperIcon = document.querySelectorAll(".upper");
    let lowerIcon = document.querySelectorAll(".lower");
    let centerIcon = document.querySelectorAll(".center");
    //Function to create cards
    for (let i = 0; i < numberOfCards; i++) {
      // Random stuff for card colors and figures
      let randomIcon = Math.floor(Math.random() * 4 + 1);
      let randomNumber = Math.floor(Math.random() * 12 + 1);
      let randomColor = Math.floor(Math.random() * 2 + 1);
      if (randomIcon == 1) {
        upperIcon[i].innerHTML = "♦";
        lowerIcon[i].innerHTML = "♦";
      } else if (randomIcon == 2) {
        upperIcon[i].innerHTML = "♠";
        lowerIcon[i].innerHTML = "♠";
      } else if (randomIcon == 3) {
        upperIcon[i].innerHTML = "♣";
        lowerIcon[i].innerHTML = "♣";
      } else {
        upperIcon[i].innerHTML = "♥";
        lowerIcon[i].innerHTML = "♥";
      }

      if (randomNumber == 1) {
        centerIcon[i].innerHTML = "A";
      } else if (randomNumber == 10) {
        centerIcon[i].innerHTML = "J";
      } else if (randomNumber == 10) {
        centerIcon[i].innerHTML = "Q";
      } else if (randomNumber == 10) {
        centerIcon[i].innerHTML = "K";
      } else {
        centerIcon[i].innerHTML = randomNumber;
      }

      if (randomColor == 1) {
        upperIcon[i].style.color = "red";
        centerIcon[i].style.color = "red";
        lowerIcon[i].style.color = "red";
      } else {
        upperIcon[i].style.color = "black";
        centerIcon[i].style.color = "black";
        lowerIcon[i].style.color = "black";
      }
    }
    // Get card elements after generating
    let upperIcons = document.querySelectorAll(".upper");
    let centerIcons = document.querySelectorAll(".center");
    let lowerIcons = document.querySelectorAll(".lower");

    // Create an array to store card objects
    let cardsArray = [];

    // Iterate through card elements and create card objects
    for (let i = 0; i < numberOfCards; i++) {
      let cardObject = createCardObject(
        upperIcons[i],
        centerIcons[i],
        lowerIcons[i]
      );
      cardsArray.push(cardObject);
    }

    let sortedCards = cardsArray.sort((a, b) =>
      a.centerIcon.localeCompare(b.centerIcon)
    );

    let rowZero = document.querySelector(".row-zero");

    for (let k = 0; k < sortedCards.length; k++) {
      // Create a new div element
      let newDivSort = document.createElement("div");

      // Set the class and innerHTML of the new div
      newDivSort.className = "col-sm-1 number";
      newDivSort.innerHTML = k;

      // Append the new div to rowZero
      rowZero.appendChild(newDivSort);
    }
  });
};
