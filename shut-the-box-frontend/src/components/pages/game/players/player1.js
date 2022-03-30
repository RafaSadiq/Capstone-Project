import $ from 'jquery';
import React from "react";



function Player1() {

    var $numDiv = $(".col-1");

    $("#start-game").on("click", function() {
        if (numberOfPlayers === 0) {
            alert("Please select the number of players.");
        } else if (numberOfPlayers === 1) {
            onePlayerGame();
            $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
            $("#player1-scoreboard, #dice-row, #roll-dice-row").fadeIn();
            $("#roll-dice").text("Roll Again");
        // }
        } else if (numberOfPlayers === 2) {
            playersTurn = 1;
            twoPlayerGame();
            $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
            $("#player2-scoreboard, #dice-row, #roll-dice-row").fadeIn();
            $("#roll-dice").text("Play Selected Numbers or Roll");
        }
    });
        
    var onePlayerGame = function() {
        // Event listener to change button text to black on mouse enter and back to white on mouse leave
        mouseOverButton();

        // Function that checks to see if you have won the game
        var winGame = function() {
          if (numbersPlayed.length === 10) {
            winGamePopup();
            gamesWon += 1;
            $gamesWon.text(gamesWon);
            gamesPlayed += 1;
            $gamesPlayed.text(gamesPlayed);
            stopTimer();
            compareRecordTime();
            $numDiv.removeClass("selected played");
            compareDiceRolls();
          } else {
            return;
          }
        };

        // function to black out numbers that have already been played successfully
        var playedNumbers = function() {
            for (let i = 0; i < $(".selected").length; i++) {
                numbersPlayed.push($(".selected")[i]);
            }
            $(".selected").addClass("played");
            $(".selected").text("");
            $numDiv.removeClass("selected");
        };


        // update the current number of dice rolls
        var diceRollCount = function() {
            diceRolls++;
            $(".current-dice-rolls").text(diceRolls);
        };
        
        var rollTheDice = function() {
            // check to see if user has won game
            winGame();

            // play roll dice sound
            rollDicemp3();

            // Dice animation
            spinDice();

            // remove dice background className
            $dice1.removeClass(dice1Bkgnd);
            $dice2.removeClass(dice2Bkgnd);

            // update dice1Bkgnd & dice2Bkgnd
            getDice1Bkgnd();
            getDice2Bkgnd();

            // update variable diceSum with new sum of rolled dice
            diceSum = (dice1Index + 1) + (dice2Index + 1);
            // add new dice background className to update dice background image
            $dice1.addClass(dice1Bkgnd);
            $dice2.addClass(dice2Bkgnd);

            // update the dice roll count variable
            diceRollCount();
        };

        // Function that toggles the className "selected" on the numbers when clicked on
        $numDiv.on("click", function() {
            $(this).toggleClass("selected");
            numberSelect();
        });

        // Event listener on number keys to be used to selec numbers in number line
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

        // Function to COMPARE sum of dice to sum of selected numbers; if sum of selected numbers = 0 then roll the dice; if sum of selected numbers != sum of dice then alert; if sum of selected numbers = sume of dice then roll the dice and clear the selected numbers from Number Line - add className "played"
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

        // Timer - Thank You Bobby King - referenced from our in-className Stopwatch project http://bobbydigital.website/
        // Global variables
        var intervalId = null;

        // Function to pad single digit numbers as strings with leading 0's
        var leftPad = function(time) {
          return time < 10 ? ("0" + time) : ("" + time);
        };

        var timeToStr = function(timeVal) {
          var tempTime = timeVal;

          var min = Math.floor(tempTime / 600);
          tempTime = tempTime - (min * 600);

          var sec = Math.floor(tempTime / 10);
          tempTime = tempTime - (sec * 10);

          return `${leftPad(min)}:${leftPad(sec)}`;
        };

        // Start Timer function
        var startTimer = function() {
          if (!intervalId) {
            // setInterval to increase our stopwatch's time
            intervalId = window.setInterval(function() {
              // increase time
              time += 1;
              // Set time value
              $timer.text(timeToStr(time));
            }, 100);
          }
        }; // End start timer

        // Stop Timer function
        var stopTimer = function() {
          // Check stopwatch state to determine if it is running or not
          if (intervalId) {
            window.clearInterval(intervalId);
            intervalId = null;
          }
        }; // End stop timer function

        // reset timer
        var resetTimer = function() {
          // Checks state of stopwatch to determine if it's running or not
          if (!intervalId) {
            // Resetting "global" state values
            time = 0;
            $timer.text("00:00");
          }
        }; //End reset timer

        // compare the record time to current game's time and update record time
        var compareRecordTime = function() {
          if ((recordTime === 0) || (time < recordTime)) {
            recordTime = time;
            $recordTime.text(timeToStr(recordTime));
          } else {
            return;
          }
        };
        // End Timer

        // Event Listener to close win popup window and re-set game
        $("#close-win-popup, #play-again, .win-cover").on("click", function() {
          $winCover.fadeOut(1000);
          $winPopup.fadeOut(1000);
          setNumbers();
          resetTimer();
          startTimer();
          diceRolls = 0;
          diceRollCount();
          numbersPlayed = [];
          sumSelectedNumbers = 0;
          crowdCheeringStop();
        });

        setNumbers();
        spinDice();
        returnRollDice();
        rollDiceEventListener();
        mouseOverButton();
        rollTheDice();
    };

   

    return (
        <div id="player-1-number-line" className="number-line-1">

            <div id="player1-id" className="col-1 player-id hidden">
                Player 1
            </div>

            <div id="num-1" className="col-1">1</div>
            <div id="num-2" className="col-1">2</div>
            <div id="num-3" className="col-1">3</div>
            <div id="num-4" className="col-1">4</div>
            <div id="num-5" className="col-1">5</div>
            <div id="num-6" className="col-1">6</div>
            <div id="num-7" className="col-1">7</div>
            <div id="num-8" className="col-1">8</div>
            <div id="num-9" className="col-1">9</div>
            
        </div>

    )
}

export default Player1;
