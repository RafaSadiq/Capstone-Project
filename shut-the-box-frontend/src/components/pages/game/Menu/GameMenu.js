import React from "react";
import {A} from 'hookrouter';
import $ from 'jquery';


function GameMenu() {

    var $yellowBkgnd = $(".yellow-bkgnd");
    var playersTurn = 0;
    var $playersTurn = $("#players-turn");
    var $p1NumberLine = $("#player1-number-line");
    var $p2NumberLine = $("#player2-number-line");
    var numberOfPlayers = 0;
    var refresh = {refresh};


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
    
    // Hover effect for Player select buttons
    var $1playerButton = $("#1-player-button");
    var $2playerButton = $("#2-player-button");

    var mouseEnterButton1 = function(button) {
        button.on("mouseenter", function() {
            $(this).attr("style",
            "color:#000; box-shadow:none");
        });
    };
    mouseEnterButton1($1playerButton);
    mouseEnterButton1($2playerButton);

    var mouseLeaveButton1 = function(button) {
        button.on("mouseleave", function() {
            $(this).removeAttr("style",
            "color:#000; box-shadow:none");
        });
    };
    mouseLeaveButton1($1playerButton);
    mouseLeaveButton1($2playerButton);
    // End hover effect for Player select buttons

    // Event listener on 1 Player button
    $1playerButton.on("click", function() {
    $(this).off("mouseleave");
    $2playerButton.removeAttr("style",
        "color:#000; box-shadow:none");
    mouseEnterButton1($2playerButton);
    mouseLeaveButton1($2playerButton);
    $(".col-1").removeClass("col-1-2-player");
    $p2NumberLine.hide();
    $("#player-2-id, #player-1-id").addClass("hidden");
    numberOfPlayers = 1;
    });
    
    // // Event listener on 2 Player button
    // $2playerButton.on("click", function() {
    // $(this).off("mouseleave");
    // $1playerButton.removeAttr("style",
    //     "color:#000; box-shadow:none");
    // mouseEnterButton1($1playerButton);
    // mouseLeaveButton1($1playerButton);
    // $(".col-1").addClass("col-1-2-player");
    // $p2NumberLine.show();
    // $("#player-2-id, #player-1-id").removeClass("hidden");
    // numberOfPlayers = 2;
    // });

    
    
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
            <div id="how-to-play">
                <button id="instructions" className="dice-button yellow-bkgnd player-button">
                    <A href="/HowToPlay">
                        How To Play
                    </A>
                </button>
            </div>
            <div className="spacer-10"></div>
            <div id="dice-board" >
                <div id="number-of-players"  >
                    {/* <button id="1-player-button" className="dice-button1 yellow-bkgnd player-button" >1 Player</button>
                    <button id="2-player-button" className="dice-button1 yellow-bkgnd player-button" >2 Players</button> */}
                </div>
            </div>
            <div className="spacer-10"></div>
            <div className="spacer-10"></div>
            <div id="start-button-row" className="button-row">
                <button id="start-game" className="dice-button yellow-bkgnd" value='Refresh Page' onClick= {refresh} >
                    <A href="/ShutTheBox"  >
                            Start The Game
                    </A>
                </button>
            </div>
            <div className="spacer-10"></div>
        </div>
    );
}

export default GameMenu;