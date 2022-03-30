import $ from 'jquery';

export function StartGame() {

    // $(document).ready(function() {
            
        // function to set event listener on Start Game button to run once number of players has been selected
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

    // });
}

