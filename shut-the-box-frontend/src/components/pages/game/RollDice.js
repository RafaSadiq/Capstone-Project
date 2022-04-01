import React from 'react';
import $ from "jquery";

function RollDice () {

	var $numDiv = $(".col-1");
	var $yellowBkgnd = $(".yellow-bkgnd");
	var $playersTurn = $("#players-turn");

	var sumSelectedNumbers = 0;
	var playersTurn = 0;
	var gamesPlayed = 0;
	var $gamesPlayed = $(".games-played");
	var gamesWon = 0;
	var $gamesWon = $(".games-won");
	var recordDiceRolls = 0;
	var $recordDiceRolls = $(".record-dice-rolls");

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
			if (event.which === 9) {
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

		$dice1.removeClass(dice1Bkgnd);
		$dice2.removeClass(dice2Bkgnd);

		getDice1Bkgnd();
		getDice2Bkgnd();

		diceSum = (dice1Index + 1) + (dice2Index + 1);

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

		mouseOverButton();
	
		var winGame = function() {
			if (numbersPlayed.length === 9) {
				winGamePopup();
				gamesWon += 1;
				$gamesWon.text(gamesWon);
				gamesPlayed += 1;
				$gamesPlayed.text(gamesPlayed);
				$numDiv.removeClass("selected played");
				compareDiceRolls();
			} else {
				return;
			}
		};
	
		var playedNumbers = function() {
			for (let i = 0; i < $(".selected").length; i++) {
				numbersPlayed.push($(".selected")[i]);
			}
			$(".selected").addClass("played");
			$(".selected").text("");
			$numDiv.removeClass("selected");
		};
			
		var diceRollCount = function() {
			diceRolls++;
			$(".current-dice-rolls").text(diceRolls);
		};

		var rollTheDice = function() {
			winGame();
				
			spinDice();
		
			$dice1.removeClass(dice1Bkgnd);
			$dice2.removeClass(dice2Bkgnd);
		
			getDice1Bkgnd();
			getDice2Bkgnd();
		
			diceSum = (dice1Index + 1) + (dice2Index + 1);

			$dice1.addClass(dice1Bkgnd);
			$dice2.addClass(dice2Bkgnd);
		
			diceRollCount();
		};
	

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

			$dice1.removeClass(dice1Bkgnd);
			$dice2.removeClass(dice2Bkgnd);
		
			getDice1Bkgnd();
			getDice2Bkgnd();
		
			diceSum = (dice1Index + 1) + (dice2Index + 1);
		
			$dice1.addClass(dice1Bkgnd);
			$dice2.addClass(dice2Bkgnd);
			diceRolls = 0;
		}

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

		var returnRollDice = function() {
		  $(document).on("keypress", function(event) {
			if (event.which === 13) {
			  rollDiceCompleteTurn();
			}
		  });
		};
	
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
			} console.log(sumSelectedNumbers);
		};

		var rollDiceEventListener = function() {
			$("#roll-dice, .dice").on("click", function() {
				rollDiceCompleteTurn();
			});
		};
	
		var compareDiceRolls = function() {
			if (recordDiceRolls === 0) {
				recordDiceRolls = diceRolls;
				$recordDiceRolls.text(recordDiceRolls);
			} else if (recordDiceRolls < diceRolls) {
				$recordDiceRolls.text(diceRolls);
			} else {
				return;
			}
		};
		

		$("#close-win-popup, #play-again, .win-cover").on("click", function() {
			$winCover.fadeOut(1000);
			$winPopup.fadeOut(1000);
			setNumbers();
			diceRolls = 0;
			diceRollCount();
			numbersPlayed = [];
			sumSelectedNumbers = 0;
		});
	
		setNumbers();
		spinDice();
		returnRollDice();
		rollDiceEventListener();
		mouseOverButton();
		rollTheDice();

	return (
		
		<div id="game-space" className="main-space">
			<div id="dice-board" className="button-row" >
				<h1><span className="animated flipInX"></span></h1>

				<div id="dice-row" >
					<div id="dice-1" className="dice"></div>
					<div id="dice-2" className="dice"></div>
				</div>

				<div id="roll-dice-row" className="button-row" >
					<button id="roll-dice" className="dice-button yellow-bkgnd" >Roll Dice</button>
				</div>
				
			</div>
		</div>

	)
}

export default RollDice;
