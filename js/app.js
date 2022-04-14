"use strict";

// LIAISON DOM
var mealButton = document.querySelector(".nxt-meal");
var mealImg = document.querySelector(".meal-img");

// VARIABLES D'INITIALISATION
var a = 0;

// FONCTION

// 
mealButton.addEventListener("click", () => {
  if (a < 5) {
    a = a + 1;
  } else {
    a = 0;
  }
  mealImg.setAttribute("src", `img/meal-${a}.png`);
  //console.log(mealImg.getAttribute("src"));
});

