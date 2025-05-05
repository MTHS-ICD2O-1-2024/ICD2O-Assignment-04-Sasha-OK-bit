// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function calculaterandompreferrence () {
  const Cheese= document.getElementById('option-cheese').checked
  const Onions= document.getElementById('option-onions').checked
  const Bacon= document.getElementById('option-bacon').checked
  const Olives= document.getElementById('option-olives').checked
  const Pineapples= document.getElementById('option-pineapples').checked
  const Pepperionis= document.getElementById('option-pepperionis').checked
  const Ham = document.getElementById('option-ham').checked

  if (Cheese && Pepperionis) {
  document.getElementById('answer1').innerHTML =
  "<p>...</p>" 
  }
    else if(lengthA === lengthB === lengthC) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Equilateral triangle type </p>" 
  }
    else if(lengthA === lengthB !== lengthC || lengthA !== lengthB === lengthC || lengthC === lengthA !== lengthB) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Isocenes triangle type</p>" 
  }
    else if (lengthA !== lengthB !== lengthC && lengthC !== lengthA) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Scalene triangle type </p>" 
  }
    else {
    document.getElementById('answer1').innerHTML =
      "<p>You calculation got an error</p>" 

}

  }