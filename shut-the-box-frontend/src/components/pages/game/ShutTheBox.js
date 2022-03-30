import React from "react";
import $ from "jquery";
import RollDice from "../game/RollDice";
// import RollDice from "../game/RollDices";
import ScoreBoard from "../game/ScoreBoard";
import Players from "./players/players";
import {A} from 'hookrouter';


function ShutTheBox() {

      $("#lets-play, #close-popup, .popup-cover").on("click", function() {
            $(".popup-cover").fadeOut(1000);
      });
      
      var incorrectPopup = function() {
            $("#incorrect-play").fadeIn(1000);
          };

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
                                    <button id="End Game" className="popup-button yellow-bkgnd" type="button" name="button">
                                          <A href="/GameMenu">
                                                End Game
                                          </A>
                                    </button>

                              </div>
                        </div>


                        <RollDice /> <br/>
                        <Players /> <br/> 
                        


                        {/* <ScoreBoard /> */}
                  </div>
            </div>
      );
}

export default ShutTheBox;