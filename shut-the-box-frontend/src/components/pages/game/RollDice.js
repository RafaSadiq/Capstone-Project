import React from 'react';
import $ from "jquery";

function RollDice () {

	var $numDiv = $(".col-1");
	var $yellowBkgnd = $(".yellow-bkgnd");
	var $playersTurn = $("#players-turn");

	var sumSelectedNumbers = 0;
	// var playersTurn = 0;

	var $dice1 = $("#dice-1");
	var $dice2 = $("#dice-2");
	var $dice = $(".dice");

	var diceImageClasses = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5","dice-6"];
	var dice1Index;
	var dice2Index;

	var diceSum = 0;
	var diceRolls = 0;
	var numbersPlayed = [];
	var numberOfPlayers = 0;

	var dice1Bkgnd;
	var dice2Bkgnd;

	var getDice1Bkgnd = function() {
		dice1Index = Math.floor(Math.random() * 6);
		dice1Bkgnd = diceImageClasses[dice1Index];
	  };
	  
	var getDice2Bkgnd = function() {
		dice2Index = Math.floor(Math.random() * 6);
		dice2Bkgnd = diceImageClasses[dice2Index];
	};

	var returnRollDice = function() {
		$(document).on("keypress", function(event) {
			if (event.which === 12) {
				rollDiceCompleteTurn();
			}
		});
	};

	var $winCover = $(".win-cover");
	var $winPopup = $("#win-popup");

	var winGamePopup = function() {
		$winCover.fadeIn(1000);
		$winPopup.fadeIn(1000);
	};

	var incorrectPopup = function() {
		$("#incorrect-play").fadeIn(1000);
	};

	// Function that spins dice 
	var spinDice = function() {
		
		setTimeout(function() {
			$dice.addClass("roll-dice-1");
		}, 20);
		setTimeout(function() {
			$dice.removeClass("roll-dice-1").addClass(
				"roll-dice-2");
		}, 600);
		setTimeout(function() {
			$dice.removeClass("roll-dice-2");
		}, 1200);
	};

	var setNumbers = function() {
		for (let i = 1; i <= 9; i++) {
			$(`#num-${i}`).text(i);
		}
		for (let i = 1; i <= 9; i++) {
			$(`#num-${i}-2`).text(i);
		}

		// remove dice background class
		$dice1.removeClass(dice1Bkgnd);
		$dice2.removeClass(dice2Bkgnd);

		// update dice1Bkgnd & dice2Bkgnd
		getDice1Bkgnd();
		getDice2Bkgnd();

		// update variable diceSum with new sum of rolled dice
		diceSum = (dice1Index + 1) + (dice2Index + 1);

		// add new dice background class to update dice background image
		$dice1.addClass(dice1Bkgnd);
		$dice2.addClass(dice2Bkgnd);
		diceRolls = 0;
	};

	var mouseOverButton = function() {
		$yellowBkgnd.on("mouseenter", function() {
		  $(this).attr("style",
			"color:#000; box-shadow:none");
		});
		$yellowBkgnd.on("mouseleave", function() {
		  $(this).removeAttr("style",
			"color:#000; box-shadow:none");
		});
		$playersTurn.off("mouseenter");
		$playersTurn.off("mouseleave");
	};
	mouseOverButton();
	
	$("#start-game").on("click", function() {
		if (numberOfPlayers === 0) {
		  alert("Please select the number of players.");
		} else if (numberOfPlayers === 1) {
		  onePlayerGame();
		  $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
		  $("#1-player-scoreboard, #dice-row, #roll-dice-row").fadeIn();
		  $("#roll-dice").text("Roll Again");
		} else if (numberOfPlayers === 2) {
		  $playersTurn = 1;
		  twoPlayerGame();
		  $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
		  $("#2-player-scoreboard, #dice-row, #roll-dice-row").fadeIn();
		  $("#roll-dice").text("Play Selected Numbers or Roll");
		}
	});

	// var onePlayerGame = function() {
		// Event listener to change button text to black on mouse enter and back to white on mouse leave
		mouseOverButton();
	
		// Function that checks to see if you have won the game
		// var winGame = function() {
		// 	if (numbersPlayed.length === 9) {
		// 		winGamePopup();
		// 		gamesWon += 1;
		// 		$gamesWon.text(gamesWon);
		// 		gamesPlayed += 1;
		// 		$gamesPlayed.text(gamesPlayed);
		// 		stopTimer();
		// 		compareRecordTime();
		// 		$numDiv.removeClass("selected played");
		// 		compareDiceRolls();
		// 	} else {
		// 		return;
		// 	}
		// };
	
		// function to black out numbers that have already been played successfully
		var playedNumbers = function() {
			for (let i = 0; i < $(".selected").length; i++) {
				numbersPlayed.push($(".selected")[i]);
			}
			$(".selected").addClass("played");
			$(".selected").text("");
			$numDiv.removeClass("selected");
		};
		
		var numberSelect = function() {
			$("#number-select")[0].play();
		};
	
		// // update the current number of dice rolls
		var diceRollCount = function() {
			diceRolls++;
			$(".current-dice-rolls").text(diceRolls);
		};

		var rollTheDice = function() {
			// check to see if user has won game
			// winGame();
		
			// play roll dice sound
			// rollDicemp3();
		
			// Dice animation
			spinDice();
		
			// remove dice background class
			$dice1.removeClass(dice1Bkgnd);
			$dice2.removeClass(dice2Bkgnd);
		
			// update dice1Bkgnd & dice2Bkgnd
			getDice1Bkgnd();
			getDice2Bkgnd();
		
			// update variable diceSum with new sum of rolled dice
			diceSum = (dice1Index + 1) + (dice2Index + 1);

			// add new dice background class to update dice background image
			$dice1.addClass(dice1Bkgnd);
			$dice2.addClass(dice2Bkgnd);
		
			// update the dice roll count variable
			diceRollCount();
		};
	
		// Function that toggles the class "selected" on the numbers when clicked on
		$numDiv.on("click", function() {
			$(this).toggleClass("selected");
			numberSelect();
		});	

		var spinDice = function() {
			setTimeout(function() {
				$dice.addClass("roll-dice-1");
			}, 20);
			setTimeout(function() {
				$dice.removeClass("roll-dice-1").addClass(
				"roll-dice-2");
			}, 600);
			setTimeout(function() {
				$dice.removeClass("roll-dice-2");
			}, 1200);
		};

		// var setNumbers = function() {
		// 	for (let i = 1; i <= 9; i++) {
		// 		$(`#num-${i}`).text(i);
		// 	}
		// 	for (let i = 1; i <= 9; i++) {
		// 		$(`#num-${i}-2`).text(i);
		// 	}
		// }
		// remove dice background class
		// $dice1.removeClass(dice1Bkgnd);
		// $dice2.removeClass(dice2Bkgnd);
	
		// // update dice1Bkgnd & dice2Bkgnd
		// getDice1Bkgnd();
		// getDice2Bkgnd();
	
		// // update variable diceSum with new sum of rolled dice
		// diceSum = (dice1Index + 1) + (dice2Index + 1);
	
		// // add new dice background class to update dice background image
		// $dice1.addClass(dice1Bkgnd);
		// $dice2.addClass(dice2Bkgnd);
		// diceRolls = 0;
		
		// // Event listener on number keys to be used to selec numbers in number line
		$(document).on("keypress", function(event) {
		  if (event.which === 49) {
			$("#num-1").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 50) {
			$("#num-2").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 51) {
			$("#num-3").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 52) {
			$("#num-4").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 53) {
			$("#num-5").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 54) {
			$("#num-6").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 55) {
			$("#num-7").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 56) {
			$("#num-8").toggleClass("selected");
			numberSelect();
		  } else if (event.which === 57) {
			$("#num-9").toggleClass("selected");
			numberSelect();
		  } 
		});

		// Event Listener on "return/enter" key to roll the dice and check selected numbers
		var returnRollDice = function() {
		  $(document).on("keypress", function(event) {
			if (event.which === 13) {
			  rollDiceCompleteTurn();
			}
		  });
		};
	
		// Function to COMPARE sum of dice to sum of selected numbers; if sum of selected numbers = 0 then roll the dice; if sum of selected numbers != sum of dice then alert; if sum of selected numbers = sume of dice then roll the dice and clear the selected numbers from Number Line - add class "played"
		var rollDiceCompleteTurn = function() {
			sumSelectedNumbers = 0;
			var selectedNumbersArray = document.querySelectorAll(
				".selected");
			for (let i = 0; i < selectedNumbersArray.length; i++) {
				sumSelectedNumbers += parseInt(selectedNumbersArray[i].innerHTML);
			}
			if (sumSelectedNumbers === 0) {
				rollTheDice();
			} else if (sumSelectedNumbers !== diceSum) {
				incorrectPopup();
				$numDiv.removeClass("selected");
			} else {
				playedNumbers();
				rollTheDice();
			}
		};

		// Event listener on Roll Dice button and individual Dye to roll the dice and check selected numbers
		var rollDiceEventListener = function() {
			$("#roll-dice, .dice").on("click", function() {
				rollDiceCompleteTurn();
			});
		};
	
		// Update record dice rolls with current number
		// var compareDiceRolls = function() {
		// 	if (recordDiceRolls === 0) {
		// 		recordDiceRolls = diceRolls;
		// 		$recordDiceRolls.text(recordDiceRolls);
		// 	} else if (recordDiceRolls < diceRolls) {
		// 		$recordDiceRolls.text(diceRolls);
		// 	} else {
		// 		return;
		// 	}
		// };
	
		// Timer - Thank You Bobby King - referenced from our in-class Stopwatch project http://bobbydigital.website/
		// Global variables
		// var intervalId = null;
	
		// // Function to pad single digit numbers as strings with leading 0's
		// var leftPad = function(time) {
		//   return time < 10 ? ("0" + time) : ("" + time);
		// };
	
		// var timeToStr = function(timeVal) {
		//   var tempTime = timeVal;
	
		//   var min = Math.floor(tempTime / 600);
		//   tempTime = tempTime - (min * 600);
	
		//   var sec = Math.floor(tempTime / 10);
		//   tempTime = tempTime - (sec * 10);
	
		//   return `${leftPad(min)}:${leftPad(sec)}`;
		// };
	
		// // Start Timer function
		// var startTimer = function() {
		//   if (!intervalId) {
		// 	// setInterval to increase our stopwatch's time
		// 	intervalId = window.setInterval(function() {
		// 	  // increase time
		// 	  time += 1;
		// 	  // Set time value
		// 	  $timer.text(timeToStr(time));
		// 	}, 100);
		//   }
		// }; // End start timer
	
		// // Stop Timer function
		// var stopTimer = function() {
		//   // Check stopwatch state to determine if it is running or not
		//   if (intervalId) {
		// 	window.clearInterval(intervalId);
		// 	intervalId = null;
		//   }
		// }; // End stop timer function
	
		// reset timer
		// var resetTimer = function() {
		//   // Checks state of stopwatch to determine if it's running or not
		//   if (!intervalId) {
		// 	// Resetting "global" state values
		// 	time = 0;
		// 	$timer.text("00:00");
		//   }
		// }; //End reset timer
	
		// compare the record time to current game's time and update record time
		// var compareRecordTime = function() {
		//   if ((recordTime === 0) || (time < recordTime)) {
		// 	recordTime = time;
		// 	$recordTime.text(timeToStr(recordTime));
		//   } else {
		// 	return;
		//   }
		// };
		// // End Timer
	
		// Event Listener to close win popup window and re-set game
		// $("#close-win-popup, #play-again, .win-cover").on("click", function() {
		//   $winCover.fadeOut(1000);
		//   $winPopup.fadeOut(1000);
		//   setNumbers();
		// //   resetTimer();
		// //   startTimer();
		//   diceRolls = 0;
		//   diceRollCount();
		//   numbersPlayed = [];
		//   sumSelectedNumbers = 0;
		// //   crowdCheeringStop();
		// });
	
		setNumbers();
		spinDice();
		// startTimer();
		returnRollDice();
		rollDiceEventListener();
		mouseOverButton();
		rollTheDice();


	// var twoPlayerGame = function() {
	// 	// Prompts to customize Player's names on board
	// 	// var player1Name = prompt("Please Enter Player 1's Name");
	// 	// // Print player 1's name to nuber line and Scoreboard if it is not ""
	// 	// var printPlayer1Name = function() {
	// 	// 	if (player1Name.trim() === "") {
	// 	// 	player1Name = "Player 1";
	// 	// 	} else {
	// 	// 	$("#player-1-id").text(player1Name.trim());
	// 	// 	$("#player-1-record h3").text(player1Name);
	// 	// 	$playersTurn.text(`${player1Name}'s Turn`);
	// 	// 	}
	// 	// };
	// 	// printPlayer1Name();
	// 	// var player2Name = prompt("Please Enter Player 2's Name");
	// 	// var printPlayer2Name = function() {
	// 	// 	if (player2Name.trim() === "") {
	// 	// 	player2Name = "Player 2";
	// 	// 	} else {
	// 	// 	$("#player-2-id").text(player2Name.trim());
	// 	// 	$("#player-2-record h3").text(player2Name);
	// 	// 	}
	// 	// };
	// 	// printPlayer2Name();

	// 	// var eventListenersP1 = function() {
	// 	// 	// Turn off event listeners for Player 2
	// 	// 	$(".col-2-2-player").off("click");
	// 	// 	$(document).off("keypress");

	// 	// 	// Function that toggles the class "selected" on the numbers when clicked on for player 1
	// 	// 	$(".col-1-2-player").on("click", function() {
	// 	// 		$(this).toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 	});

	// 	// 	// Event listener on number keys to be used to selec numbers in payer 1's number line
	// 	// 	$(document).on("keypress", function(event) {
	// 	// 		if (event.which === 49) {
	// 	// 			$("#num-1").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 50) {
	// 	// 			$("#num-2").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 51) {
	// 	// 			$("#num-3").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 52) {
	// 	// 			$("#num-4").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 53) {
	// 	// 			$("#num-5").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 54) {
	// 	// 			$("#num-6").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 55) {
	// 	// 			$("#num-7").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 56) {
	// 	// 			$("#num-8").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} else if (event.which === 57) {
	// 	// 			$("#num-9").toggleClass("selected");
	// 	// 			numberSelect();
	// 	// 		} 
	// 	// 	});

	// 	// 	// Event Listener on "return/enter" key to roll the dice and check selected numbers
	// 	// 	var returnRollDice2p = function() {
	// 	// 		$(document).on("keypress", function(event) {
	// 	// 			if (event.which === 13) {
	// 	// 			rollDiceCompleteTurn();
	// 	// 			}
	// 	// 		});
	// 	// 	};
	// 	// 	returnRollDice2p();
		
	// 	// };

	// 	// var eventListenersP2 = function() {
	// 	// 	// Turn off event listeners for Player 1
	// 	// 	$(".col-1-2-player").off("click");
	// 	// 	$(document).off("keypress");
		
	// 	// 	// Function that toggles the class "selected" on the numbers when clicked on for player 2
	// 	// 	$(".col-2-2-player").on("click", function() {
	// 	// 		$(this).toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 	});
		
	// 	// 	// Event listener on number keys to be used to selec numbers in player 2's number line
	// 	// 	$(document).on("keypress", function(event) {
	// 	// 		if (event.which === 49) {
	// 	// 		$("#num-1-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 50) {
	// 	// 		$("#num-2-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 51) {
	// 	// 		$("#num-3-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 52) {
	// 	// 		$("#num-4-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 53) {
	// 	// 		$("#num-5-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 54) {
	// 	// 		$("#num-6-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 55) {
	// 	// 		$("#num-7-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 56) {
	// 	// 		$("#num-8-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 57) {
	// 	// 		$("#num-9-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		} else if (event.which === 48) {
	// 	// 		$("#num-10-2").toggleClass("selected");
	// 	// 		numberSelect();
	// 	// 		}
	// 	// 	});
	// 	// 	// Event Listener on "return/enter" key to roll the dice and check selected numbers
	// 	// 	var returnRollDice2p = function() {
	// 	// 		$(document).on("keypress", function(event) {
	// 	// 		if (event.which === 13) {
	// 	// 			rollDiceCompleteTurn();
	// 	// 		}
	// 	// 		});
	// 	// 	};
	// 	// 	returnRollDice2p();
	// 	// };

	// 	// Function to COMPARE sum of dice to sum of selected numbers; if sum of selected numbers = 0 then roll the dice; if sum of selected numbers != sum of dice then alert; if sum of selected numbers = sume of dice then roll the dice and clear the selected numbers from Number Line - add class "played"
	// 	var rollDiceCompleteTurn = function() {
	// 		sumSelectedNumbers = 0;
	// 		var selectedNumbersArray = document.querySelectorAll(
	// 		".selected");
	// 		for (let i = 0; i < selectedNumbersArray.length; i++) {
	// 		sumSelectedNumbers += parseInt(selectedNumbersArray[i].innerHTML);
	// 		}
	// 		if (sumSelectedNumbers === 0) {
	// 		playedNumbers();
	// 		rollTheDice();
	// 		} else if (sumSelectedNumbers !== diceSum) {
	// 		incorrectPopup();
	// 		$(".col-1-2-player, .col-2-2-player").removeClass("selected");
	// 		} else {
	// 		playedNumbers();
	// 		rollTheDice();
	// 		}
	// 	};

	// 	// function to black out numbers that have already been played successfully
	// 	var playedNumbers = function() {
	// 		for (let i = 0; i < $(".selected").length; i++) {
	// 		numbersPlayed.push($(".selected")[i]);
	// 		}
	// 		$(".selected").addClass("played");
	// 		$(".selected").text("");
	// 		$(".col-1-2-player, .col-2-2-player").removeClass("selected");
	// 		if (playersTurn === 1) {
	// 		$playersTurn.text(`${player2Name}'s Turn`);
	// 		playersTurn = 2;
	// 		$p1NumberLine.addClass("not-players-turn");
	// 		$p2NumberLine.removeClass("not-players-turn");
	// 		eventListenersP2();
	// 		} else if (playersTurn === 2) {
	// 		$playersTurn.text(`${player1Name}'s Turn`);
	// 		playersTurn = 1;
	// 		$p2NumberLine.addClass("not-players-turn");
	// 		$p1NumberLine.removeClass("not-players-turn");
	// 		eventListenersP1();
	// 		}
	// 	};

	// 	// Event Listener on "return/enter" key to roll the dice and check selected numbers
	// 	var returnRollDice2p = function() {
	// 		$(document).on("keypress", function(event) {
	// 		if (event.which === 13) {
	// 			rollDiceCompleteTurn();
	// 		}
	// 		});
	// 	};
	// 	returnRollDice2p();

	// 	// Event listener on Roll Dice button and individual Dye to roll the dice and check selected numbers
	// 	var rollDiceEventListener = function() {
	// 		$("#roll-dice, .dice").on("click", function() {
	// 		rollDiceCompleteTurn();
	// 		});
	// 	};

	// 	// function that "rolls" the dice - updating their background image
	// 	var rollTheDice = function() {
	// 		// check to see if user has won game
	// 		winGame2p();

	// 		// play roll dice sound
	// 		rollDicemp3();

	// 		// Dice animation
	// 		spinDice();

	// 		// remove dice background class
	// 		$dice1.removeClass(dice1Bkgnd);
	// 		$dice2.removeClass(dice2Bkgnd);

	// 		// update dice1Bkgnd & dice2Bkgnd
	// 		getDice1Bkgnd();
	// 		getDice2Bkgnd();

	// 		// update variable diceSum with new sum of rolled dice
	// 		diceSum = (dice1Index + 1) + (dice2Index + 1);
	// 		console.log(diceSum);
	// 		// add new dice background class to update dice background image
	// 		$dice1.addClass(dice1Bkgnd);
	// 		$dice2.addClass(dice2Bkgnd);
	// 	};

	// 	// Function that checks to see if a player has won the game
	// 	var winGame2p = function() {
	// 		if ($("#player-1-number-line .played").length === 10) {
	// 		$("#win-popup").html(
	// 			`<h2>CONGRATULATIONS ${player1Name}!</h2><h2>YOU WIN!!!</h2><button id="play-again" class="popup-button yellow-bkgnd" type="button" name="button">Play Again</button>`
	// 		);
	// 		winGamePopup();
	// 		gamesWonP1 += 1;
	// 		$(".total-games-won-1").text(gamesWonP1);
	// 		$(".col-1-2-player, .col-2-2-player").removeClass(
	// 			"selected played");
	// 		} else if ($("#player-2-number-line .played").length === 10) {
	// 		$("#win-popup").html(
	// 			`<h2>CONGRATULATIONS ${player2Name}!</h2><h2>YOU WIN!!!</h2><button id="play-again" class="popup-button yellow-bkgnd" type="button" name="button">Play Again</button>`
	// 		);
	// 		winGamePopup();
	// 		gamesWonP2 += 1;
	// 		$(".total-games-won-2").text(gamesWonP2);
	// 		$(".col-1-2-player, .col-2-2-player").removeClass(
	// 			"selected played");
	// 		} else {
	// 		return;
	// 		}
	// 	};

	// 	// Event Listener to close win popup window and re-set game
	// 	$("#close-win-popup, #play-again, .win-cover").on("click", function() {
	// 		$winCover.fadeOut(1000);
	// 		$winPopup.fadeOut(1000);
	// 		setNumbers();
	// 		numbersPlayed = [];
	// 		sumSelectedNumbers = 0;
	// 		crowdCheeringStop();
	// 	});

	// 	rollTheDice();
	// 	setNumbers();
	// 	rollDicemp3();
	// 	spinDice();
	// 	returnRollDice2p();
	// 	rollDiceEventListener();
	// 	eventListenersP1();
	// 	mouseOverButton();
	// 	sumSelectedNumbers = 0;
	// };




	return (
		
		// Dice and roll buttons
		<div id="game-space" className="main-space">
			<div id="dice-board" className="button-row" >
				<h1><span className="animated flipInX">Shut The Box</span></h1>

				<div id="dice-row" >
					<div id="dice-1" className="dice"></div>
					<div id="dice-2" className="dice"></div>
				</div>

				<div id="roll-dice-row" className="button-row" >
					<button id="roll-dice" className="dice-button yellow-bkgnd" >Roll Dice</button>
					{/* <button id="play-again" className="dice-button yellow-bkgnd"  >Play Selected</button> */}
				</div>
				
			</div>
		</div>
		// End Dice and roll buttons

	)
}

export default RollDice;
