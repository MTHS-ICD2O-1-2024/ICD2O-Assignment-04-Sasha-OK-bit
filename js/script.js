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

  if ((Cheese || Pepperionis)  == true) {
  document.getElementById('answer1').innerHTML =
  "<p>Your pizza would taste American</p>" 
  }
    else if((Ham || Pineapples)  == true) {
    document.getElementById('answer1').innerHTML =
      "<p>You got Hawaii Style Pizza</p>" 
  }
    else if((Olives)  == true ) {
    document.getElementById('answer1').innerHTML =
      "<p>You consider of something european</p>" 
  }
    else if ((Bacon || Onions)  == true) {
    document.getElementById('answer1').innerHTML =
      "<p> You're a odd person in Canada, nice </p>" 
  }
    else {
    document.getElementById('answer1').innerHTML =
      "<p>So...Pizza with just Bread and Tomato Sauce??</p>" 

}

  }