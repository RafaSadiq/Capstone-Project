import React from "react";

function HowToPlay () {
    
    return (
        <div>
            <div className="popup-window">
                <div className="spacer-10"></div>   
                <h2>
                    How To Play
                </h2>
                <div className="spacer-10"></div>   
                <p className="para">
                    The object of the game is to clear all of the numbers 1 - 9 from the red number line.
                    Single Player Game
                </p>
                <div className="spacer-10"></div> 
                <ul className="para">
                    <li>Start the game by rolling the dice.</li>
                    <li>Select a number or multiple numbers from the red number line that add up to the sum of the dots on the displayed dice.</li>
                    <li>Roll again and repeat until the number line is clear.</li>
                    <li>If you are unable to match the remaining numbers in the red number line to the dice, continue rolling until you have a playable match.</li>
                    <li>Game Ends when you pick the last number and roll the dice.</li>
                </ul>
                <div className="spacer-10"></div>   
                {/* <h2>
                    Two Player Game
                </h2>
                <div className="spacer-10"></div> 
                <ul className="para">
                    <li>The dice are rolled to start the game and the top player on the board goes first.</li>
                    <li>In turn, each player selects a number or multiple numbers from their red number line that add up to the sum of the dots on the displayed dice.</li>
                    <li>To complete the turn, click the "Play Selected Numbers" button.</li>
                    <li>If a player is unable to match any of the remaining numbers in their red number line to the sum of the dice, that player ends their turn by clicking the "Play Selected Numbers" button.</li>
                    <li>The game ends when one player has cleared all of the numbers from their number line.</li>
                </ul> */}
            </div>
        </div>
    )
}

export default HowToPlay;

    
