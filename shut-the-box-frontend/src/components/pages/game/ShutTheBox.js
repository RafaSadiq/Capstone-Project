import React from "react";
import $ from "jquery";
import RollDice from "../game/RollDice";
import Switch from "../game/switch/switch";
import ScoreBoard from "../game/ScoreBoard";


function ShutTheBox() {

      $("#reset4").on("click", function () {
            let selectButtons = ['reset4'];
            for(i = 0; i < selectMenus.length; i++) {
              $('#' + selectMenus[i]).prop('selectedIndex', 0);
            }
            for(j = 0; j < textFields.length; j++) {
              $('#' + textFields[j]).val("");
            }
      });

      return (
            <div className="dice-game">
                  <div >
                  {/* <-- Alert for when selected numbers do not add up to sum of dice --> */}
                        <div id="incorrect-play" className="popup-cover">
                              <div id="close-popup" className="close-popup">X</div>
                              <div id="incorrect-play-popup" className="popup-window popup-window-small">
                              Your selected number(s) does not add up to the sum of the dots on the displayed dice. Please select again.
                              <button id="lets-play" className="popup-button yellow-bkgnd" type="button" name="button">Back to the Game</button>
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
                                          Play Again??
                                    </button>
                              </div>
                        </div>


                        <RollDice /> <br/>
                        <Switch  /> <br/>
                        <div>
                              <p>
                                    If Player Cannot make all the tabs red on their turn, <br/>
                                    Press TURN END.
                              </p>
                        </div>

                        <div className="btn-container">
                              <button id="reset4" className="btn69" >TURN END</button>
                        </div>

                        <ScoreBoard />
                  </div>
            </div>
      );
}
  
export default ShutTheBox;


