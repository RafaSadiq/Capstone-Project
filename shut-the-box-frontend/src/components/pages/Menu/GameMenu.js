import React from "react";
// import $ from 'jQuery';


function GameMenu() {
    // var mouseOverButton = function() {
    //     $yellowBkgnd.on("mouseenter", function() {
    //       $(this).attr("style",
    //         "color:#000; box-shadow:none");
    //     });
    //     $yellowBkgnd.on("mouseleave", function() {
    //       $(this).removeAttr("style",
    //         "color:#000; box-shadow:none");
    //     });
    //     $playersTurn.off("mouseenter");
    //     $playersTurn.off("mouseleave");
    // };
    // mouseOverButton();

    // Hover effect for Player select buttons
    // var $1playerButton = $("#1-player-button");
    // var $2playerButton = $("#2-player-button");

    // var mouseEnterButton1 = function(button) {
    //     button.on("mouseenter", function() {
    //         $(this).attr("style",
    //         "color:#000; box-shadow:none");
    //     });
    // };
    // mouseEnterButton1($1playerButton);
    // mouseEnterButton1($2playerButton);

    // var mouseLeaveButton1 = function(button) {
    //     button.on("mouseleave", function() {
    //         $(this).removeAttr("style",
    //         "color:#000; box-shadow:none");
    //     });
    // };
    // mouseLeaveButton1($1playerButton);
    // mouseLeaveButton1($2playerButton);



    return (
        <div id="Menu-screen" >
            <div id="welcome-scoreboard" className="player-selection-intro">
                <div className="spacer-10"></div>   
                <h2>Welcome to Shut The Box</h2>
                <div className="spacer-10"></div>
                <p>To begin the game, please select how many players there are using the buttons, then click the "Start Game" button to begin.</p>
                <p className="small-text"><em>For instructions on how to play the game, click the "How To Play" button in the top right corner of your screen.</em></p>
            </div>   
            <div className="spacer-10"></div>
            <div className="how-to-play">
                <button id="instructions" className="how-to-play yellow-bkgnd" type="button" name="button" href="/How-To-Play">
                        How To Play
                </button>
            </div>
            <div className="spacer-10"></div>
            <div id="num-players" >
                <div id="number-of-players" className="button-row" >
                    <button id="player1-btn" className="dice-button yellow-bkgnd player-button" >1 Player</button>
                    <button id="player2-btn" className="dice-button yellow-bkgnd player-button"  >2 Players</button>
                </div>
            </div>
            <div className="spacer-10"></div>
            <div className="spacer-10"></div>
            <div id="start-button-row" className="button-row">
                <button id="start-game" className="dice-button yellow-bkgnd" >
                    Start Game
                </button>
            </div>
            <div className="spacer-10"></div>
        </div>
    );
}

export default GameMenu;