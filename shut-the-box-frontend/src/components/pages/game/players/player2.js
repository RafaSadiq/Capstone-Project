import $ from 'jquery';
import React from "react";

function Player2() {

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
    
    var $p2NumberLine = $("#player2-number-line");

    var twoPlayerGame = function() {
        // Prompts to customize Player's names on board
        var player1Name = prompt("Please Enter Player 1's Name");
        // Print player 1's name to nuber line and Scoreboard if it is not ""
        var printPlayer1Name = function() {
            if (player1Name.trim() === "") {
            player1Name = "Player 1";
            } else {
            $("#player-1-id").text(player1Name.trim());
            $("#player-1-record h3").text(player1Name);
            $playersTurn.text(`${player1Name}'s Turn`);
            }
        };
        printPlayer1Name();
        var player2Name = prompt("Please Enter Player 2's Name");
        var printPlayer2Name = function() {
            if (player2Name.trim() === "") {
            player2Name = "Player 2";
            } else {
            $("#player-2-id").text(player2Name.trim());
            $("#player-2-record h3").text(player2Name);
            }
        };
        printPlayer2Name();
    
        var eventListenersP1 = function() {
            // Turn off event listeners for Player 2
            $(".col-2-2-player").off("click");
            $(document).off("keypress");
    
            // Function that toggles the className "selected" on the numbers when clicked on for player 1
            $(".col-1-2-player").on("click", function() {
            $(this).toggleClass("selected");
            numberSelect();
            });
    
            // Event listener on number keys to be used to selec numbers in payer 1's number line
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
            } else if (event.which === 48) {
                $("#num-10").toggleClass("selected");
                numberSelect();
            }
            });
            // Event Listener on "return/enter" key to roll the dice and check selected numbers
            var returnRollDice2p = function() {
            $(document).on("keypress", function(event) {
                if (event.which === 13) {
                rollDiceCompleteTurn();
                }
            });
            };
            returnRollDice2p();
    
        };
        var eventListenersP2 = function() {
            // Turn off event listeners for Player 1
            $(".col-1-2-player").off("click");
            $(document).off("keypress");
    
            // Function that toggles the className "selected" on the numbers when clicked on for player 2
            $(".col-2-2-player").on("click", function() {
            $(this).toggleClass("selected");
            numberSelect();
            });
    
            // Event listener on number keys to be used to selec numbers in player 2's number line
            $(document).on("keypress", function(event) {
            if (event.which === 49) {
                $("#num-1-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 50) {
                $("#num-2-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 51) {
                $("#num-3-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 52) {
                $("#num-4-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 53) {
                $("#num-5-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 54) {
                $("#num-6-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 55) {
                $("#num-7-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 56) {
                $("#num-8-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 57) {
                $("#num-9-2").toggleClass("selected");
                numberSelect();
            } else if (event.which === 48) {
                $("#num-10-2").toggleClass("selected");
                numberSelect();
            }
            });
            // Event Listener on "return/enter" key to roll the dice and check selected numbers
            var returnRollDice2p = function() {
            $(document).on("keypress", function(event) {
                if (event.which === 13) {
                rollDiceCompleteTurn();
                }
            });
            };
            returnRollDice2p();
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
            playedNumbers();
            rollTheDice();
            } else if (sumSelectedNumbers !== diceSum) {
            incorrectPopup();
            $(".col-1-2-player, .col-2-2-player").removeClass("selected");
            } else {
            playedNumbers();
            rollTheDice();
            }
        };
    
        // function to black out numbers that have already been played successfully
        var playedNumbers = function() {
            for (let i = 0; i < $(".selected").length; i++) {
            numbersPlayed.push($(".selected")[i]);
            }
            $(".selected").addClass("played");
            $(".selected").text("");
            $(".col-1-2-player, .col-2-2-player").removeClass("selected");
            if (playersTurn === 1) {
            $playersTurn.text(`${player2Name}'s Turn`);
            playersTurn = 2;
            $p1NumberLine.addClass("not-players-turn");
            $p2NumberLine.removeClass("not-players-turn");
            eventListenersP2();
            } else if (playersTurn === 2) {
            $playersTurn.text(`${player1Name}'s Turn`);
            playersTurn = 1;
            $p2NumberLine.addClass("not-players-turn");
            $p1NumberLine.removeClass("not-players-turn");
            eventListenersP1();
            }
        };
    
        // Event Listener on "return/enter" key to roll the dice and check selected numbers
        var returnRollDice2p = function() {
            $(document).on("keypress", function(event) {
            if (event.which === 13) {
                rollDiceCompleteTurn();
            }
            });
        };
        returnRollDice2p();
    
        // Event listener on Roll Dice button and individual Dye to roll the dice and check selected numbers
        var rollDiceEventListener = function() {
            $("#roll-dice, .dice").on("click", function() {
            rollDiceCompleteTurn();
            });
        };
        // function that "rolls" the dice - updating their background image
        var rollTheDice = function() {
            // check to see if user has won game
            winGame2p();
    
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
            console.log(diceSum);
            // add new dice background className to update dice background image
            $dice1.addClass(dice1Bkgnd);
            $dice2.addClass(dice2Bkgnd);
        };
    
        // Function that checks to see if a player has won the game
        var winGame2p = function() {
            if ($("#player-1-number-line .played").length === 10) {
            $("#win-popup").html(
                `<h2>CONGRATULATIONS ${player1Name}!</h2><h2>YOU WIN!!!</h2><button id="play-again" className="popup-button yellow-bkgnd" type="button" name="button">Play Again</button>`
            );
            winGamePopup();
            gamesWonP1 += 1;
            $(".total-games-won-1").text(gamesWonP1);
            $(".col-1-2-player, .col-2-2-player").removeClass(
                "selected played");
            } else if ($("#player-2-number-line .played").length === 10) {
            $("#win-popup").html(
                `<h2>CONGRATULATIONS ${player2Name}!</h2><h2>YOU WIN!!!</h2><button id="play-again" className="popup-button yellow-bkgnd" type="button" name="button">Play Again</button>`
            );
            winGamePopup();
            gamesWonP2 += 1;
            $(".total-games-won-2").text(gamesWonP2);
            $(".col-1-2-player, .col-2-2-player").removeClass(
                "selected played");
            } else {
            return;
            }
        };
    
        // Event Listener to close win popup window and re-set game
        $("#close-win-popup, #play-again, .win-cover").on("click", function() {
            $winCover.fadeOut(1000);
            $winPopup.fadeOut(1000);
            setNumbers();
            numbersPlayed = [];
            sumSelectedNumbers = 0;
            crowdCheeringStop();
        });
    
        rollTheDice();
        setNumbers();
        rollDicemp3();
        spinDice();
        returnRollDice2p();
        rollDiceEventListener();
        eventListenersP1();
        mouseOverButton();
        sumSelectedNumbers = 0;
    };

    

    return (
        <div id="player-2-number-line" className="not-players-turn number-line-1">

            <div id="player2-id" className="col-1 col-2-2-player player-id hidden">
                Player 2
            </div>

            <div id="num-1-2" className="col-2 col-2-2-player" >1</div>
            <div id="num-2-2" className="col-2 col-2-2-player" >2</div>
            <div id="num-3-2" className="col-2 col-2-2-player" >3</div>
            <div id="num-4-2" className="col-2 col-2-2-player" >4</div>
            <div id="num-5-2" className="col-2 col-2-2-player" >5</div>
            <div id="num-6-2" className="col-2 col-2-2-player" >6</div>
            <div id="num-7-2" className="col-2 col-2-2-player" >7</div>
            <div id="num-8-2" className="col-2 col-2-2-player" >8</div>
            <div id="num-9-2" className="col-2 col-2-2-player" >9</div>

        </div>

    )
}

export default Player2;

