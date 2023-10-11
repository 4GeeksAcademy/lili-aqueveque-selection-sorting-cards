/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Get the input element
  const numberOfCardsInput = document.getElementById("numberOfCardsInput");

  // Add event listener for the input change event
  numberOfCardsInput.addEventListener("input", function(event) {});

  let numberOfCards = 4;
  let cardsMissing = numberOfCards - 3;

  if (numberOfCards > 3) {
    // Get the parent element
    const rowOriginal = document.getElementById("rowOriginal");

    // Get the first card element to clone
    const existingCard = document.querySelector(".firstChild");

    for (let j = 0; j < cardsMissing; j++) {
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
};
