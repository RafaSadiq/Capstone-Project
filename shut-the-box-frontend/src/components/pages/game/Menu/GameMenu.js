import React from "react";
import {A} from 'hookrouter';
import $ from 'jquery';


function GameMenu() {

    var $yellowBkgnd = $(".yellow-bkgnd");
    var $playersTurn = $("#players-turn");
    var numberOfPlayers = 0;

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
    var $player1Button = $("#player1-button");
    var $player2Button = $("#player2-button");

    var mouseEnterButton1 = function(button) {
        button.on("mouseenter", function() {
            $(this).attr("style",
            "color:#000; box-shadow:none");
        });
    };
    mouseEnterButton1($player1Button);
    mouseEnterButton1($player2Button);

    var mouseLeaveButton2 = function(button) {
        button.on("mouseleave", function() {
            $(this).removeAttr("style",
            "color:#000; box-shadow:none");
        });
    };
    mouseLeaveButton2($player1Button);
    mouseLeaveButton2($player2Button);

    $player1Button.on("click", function() {
        $(this).off("mouseleave");
        $player2Button.removeAttr("style",
          "color:#000; box-shadow:none");
        mouseEnterButton1($player2Button);
        mouseLeaveButton2($player2Button);
        $(".col-1").removeClass("col-1-2-player");
        $p2NumberLine.hide();
        $("#player2-id, #player1-id").addClass("hidden");
        numberOfPlayers = 1;
    });

    $player2Button.on("click", function() {
        $(this).off("mouseleave");
        $player1Button.removeAttr("style",
          "color:#000; box-shadow:none");
        mouseEnterButton1($player1Button);
        mouseLeaveButton1($player1Button);
        $(".col-1").addClass("col-1-2-player");
        $p2NumberLine.show();
        $("#player2-id, #player1-id").removeClass("hidden");
        numberOfPlayers = 2;
    });

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
            $playersTurn = 1;
            twoPlayerGame();
            $("#welcome-scoreboard, #number-of-players, #start-button-row").hide();
            $("#player2-scoreboard, #dice-row, #roll-dice-row").fadeIn();
            $("#roll-dice").text("Play Selected Numbers or Roll");
        }
    }); 

   

    
    

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
                {/* <A href="/ShutTheBox"> */}
                        Start The Game
                {/* </A> */}
                </button>
            </div>
            <div className="spacer-10"></div>
        </div>
    );
}

export default GameMenu;