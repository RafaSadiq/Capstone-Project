import React from "react";
import $ from "jquery";
import RollDice from "../game/RollDice";
// import RollDice from "../game/RollDices";
import ScoreBoard from "../game/ScoreBoard";
import Players from "./players/players";
import {A} from 'hookrouter';


function ShutTheBox() {

      var numbersPlayed = [];

      var $winCover = $(".win-cover");
	var $winPopup = $("#win-popup");

	var winGamePopup = function() {
		$winCover.fadeIn(1000);
		$winPopup.fadeIn(1000);
	};

      // Function that checks to see if you have won the game
      var winGame = function() {
            if (numbersPlayed.length === 9) {
                  winGamePopup();
                  gamesWon += 1;
                  $gamesWon.text(gamesWon);
                  gamesPlayed += 1;
                  $gamesPlayed.text(gamesPlayed);
                  // stopTimer();
                  compareRecordTime();
                  $numDiv.removeClass("selected played");
                  compareDiceRolls();
            } else {
                  return;
            }
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

      // Event Listener to close win popup window and re-set game
      $("#close-win-popup, #play-again, #end-game, .win-cover").on("click", function() {
            $winCover.fadeOut(1000);
            $winPopup.fadeOut(1000);
            setNumbers();
            //   resetTimer();
            //   startTimer();
            diceRolls = 0;
            diceRollCount();
            numbersPlayed = [];
            sumSelectedNumbers = 0;
            //   crowdCheeringStop();
      });

      var setNumbers = function() {
            for (let i = 1; i <= 9; i++) {
                  $(`#num-${i}`).text(i);
            }
            for (let i = 1; i <= 9; i++) {
                  $(`#num-${i}-2`).text(i);
            }
      }

      var rollTheDice = function() {
            // check to see if user has won game
            winGame();
      };


      $("#lets-play, #close-popup, .popup-cover").on("click", function() {
            $(".popup-cover").fadeOut(1000);
      });

      rollTheDice();
      
      return (
            <div className="dice-game">
                  <div >
                  {/* <-- Alert for when selected numbers do not add up to sum of dice --> */}
                        <div id="incorrect-play" className="popup-cover">
                              <div id="close-popup" className="close-popup">X</div>
                              <div id="incorrect-play-popup" className="popup-window popup-window-small">
                              Your selected number(s) does not add up to the sum of the dots on the displayed dice. Please select again.
                                    <button id="lets-play" className="popup-button yellow-bkgnd" type="button" name="button">
                                          <A href="/ShutTheBox">
                                                Back to the Game
                                          </A>
                                    </button>
                              </div>
                        </div>

                        <div className="win-cover">
                              <div id="close-win-popup" className="close-popup">X</div>
                              <div id="win-popup" className="popup-window" >
                                    <h2>
                                          CONGRATULATIONS!
                                    </h2>
                                    <h2>
                                          YOU WIN!!!
                                    </h2>
                                    <button id="play-again" className="popup-button yellow-bkgnd" type="button" name="button">
                                          <A href="/ShutTheBox">
                                                Play Again??
                                          </A>
                                    </button>
                                    <button id="end-game" className="popup-button yellow-bkgnd" type="button" name="button">
                                          <A href="/GameMenu">
                                                End Game
                                          </A>
                                    </button>

                              </div>
                        </div>


                        <RollDice /> <br/>
                        <Players /> <br/> 
                        


                        <ScoreBoard />
                  </div>
            </div>
      );
}

export default ShutTheBox;