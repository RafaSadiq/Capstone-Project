import React from 'react';
import $ from "jquery";

function RollDice () {

	var $numDiv = $(".col-1");
	var $yellowBkgnd = $(".yellow-bkgnd");
	var $playersTurn = $("#players-turn");

	var sumSelectedNumbers = 0;
	var playersTurn = 0;
    
	var $dice1 = $("#dice-1");
	var $dice2 = $("#dice-2");
	var $dice = $(".dice");

	var diceImageClasses = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5","dice-6"];
	var dice1Index;
	var dice2Index;

	var diceSum = 0;
	var diceRolls = 0;

	var dice1Bkgnd;
	var dice2Bkgnd;

	var getDice1Bkgnd = function() {
	  dice1Index = Math.floor(Math.random() * 5 + 1);
	  dice1Bkgnd = diceImageClasses[dice1Index];
      console.log(dice1Index)
	};
	
	var getDice2Bkgnd = function() {
	  dice2Index = Math.floor(Math.random() * 5 + 1);
	  dice2Bkgnd = diceImageClasses[dice2Index];
	};

    var returnRollDice = function() {
        $(document).on("keypress", function(event) {
            if (event.which === 13) {
            rollDiceCompleteTurn();
            }
        });
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
		for (let i = 1; i <= 10; i++) {
		  $(`#num-${i}`).text(i);
		}
		for (let i = 1; i <= 10; i++) {
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
		  playersTurn = 1;
		  twoPlayerGame();
		  $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
		  $("#2-player-scoreboard, #dice-row, #roll-dice-row").fadeIn();
		  $("#roll-dice").text("Play Selected Numbers or Roll");
		}
	});

	
    // var onePlayerGame = function() {
        var rollTheDice = function() {
            // winGame();
        
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

        var diceRollCount = function() {
            diceRolls++;
            $(".current-dice-rolls").text(diceRolls);
        };



        setNumbers();
        spinDice();
        returnRollDice();
        rollDiceEventListener();
        mouseOverButton();
        rollTheDice();
    // }




	return (
		
		// Dice and roll buttons
		<div id="game-space" className="main-space">
			<div id="dice-board" className="button-row" >
				<h1><span className="animated flipInX">Shut The Box</span></h1>

				<div id="dice-row" className="button-row">
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
