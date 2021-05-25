// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this code will check your age to see what movies/films you're allowed to watch.

  const userAge = parseInt(document.getElementById('user-age').value)

  if (userAge >= 17) {
		document.getElementById('answer').innerHTML = "You can see R-rated films/movies alone :)";
	} else if (userAge >= 13) {
		document.getElementById('answer').innerHTML = "You can see PG-13 films/movies alone :)";
	} else if (userAge >= 5) {
		document.getElementById('answer').innerHTML = "You can see G or PG films/movies alone :D";
	} else {
		document.getElementById('answer').innerHTML = "Uhhhh… you’re too young to watch most things.";
	}
}
