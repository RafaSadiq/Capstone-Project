import {winGame} from './game/RollDice'

function PopUp() {


    var $winCover = $(".win-cover");
    var $winPopup = $("#win-popup");

    var winGamePopup = function() {
        $winCover.fadeIn(1000);
        $winPopup.fadeIn(1000);
    };

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
    
    var rollTheDice = function() {
        winGame();   
    }
    

    // var incorrectPopup = function() {
    //     $("#incorrect-play").fadeIn(1000);
    // };

    rollTheDice();


    return (
        <div className="popup">
            {/* Alert for when selected numbers do not add up to sum of dice  */}
            <div id="incorrect-play" class="popup-cover" style="display:none" />

            <div id="close-popup" class="close-popup">
                X
            </div>

            <div id="incorrect-play-popup" class="popup-window popup-window-small">
                Your selected number(s) does not add up to the sum of the dots on the displayed dice. Please select again.
                <button id="lets-play" class="popup-button yellow-bkgnd" type="button" name="button">
                    Back to the Game
                </button>
            </div>

            {/* Popup for when user wins the game  */}
            <div class="win-cover" style="display:none">
                <div id="close-win-popup" class="close-popup">
                    X
                </div>
                <div id="win-popup" class="popup-window" style="display:none">
                    <h2>CONGRATULATIONS!</h2>
                    <h2>YOU WIN!!!</h2>
                <button id="play-again" class="popup-button yellow-bkgnd" type="button" name="button">Play Again</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;