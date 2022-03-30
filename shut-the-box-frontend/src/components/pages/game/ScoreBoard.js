import React from "react";

function scoreboard() {

    return (
        <div id="game-scoreboard" >
          <div id="welcome-scoreboard" className="player-selection-intro">
                <h2>Scoreboard</h2>
                <div className="bar1">
                    <div id="score-row-1" className="score-row">
                        <div id="number-dice-rolls" className="score-block">
                            <h3>Dice Rolls</h3>
                            <span className="current-dice-rolls">0</span>
                        </div>

                        <div id="lowest-dice-rolls" className="score-block">
                            <h3>Fewest Dice Rolls</h3>
                            <span className="record-dice-rolls">0</span>
                        </div>
                    </div>

                    {/* <div id="score-row-2" className="score-row">
                        <div id="current-time" className="score-block">
                            <div className="top-bar"></div>
                            <h3>Timer</h3>
                            <span className="timer">00:00</span>
                        </div>

                        <div id="best-time" className="score-block">
                            <div className="top-bar"></div>
                            <h3>Best Time</h3>
                            <span className="record-time">00:00</span>
                        </div>
                    </div> */}

                    <div id="score-row-3" className="score-row">
                        <div id="number-games-played" className="score-block">
                            <div className="top-bar"></div>
                            <h3>Games Played</h3>
                            <span className="games-played">0</span>
                        </div>
                        <div id="number-games-won" className="score-block">
                            <div className="top-bar"></div>
                            <h3>Games Won</h3>
                            <span className="games-won">0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="player2-scoreboard">
                <div>
                    <button id="players-turn" className="dice-button yellow-bkgnd players-turn-button" type="button" name="button">
                    Player 1's Turn
                    </button>
                </div>
                <h2>Scoreboard</h2>
                <div className="bar1"></div>
                <h3>Games Won</h3>
                <div id="2-player-games-won" className="score-row">
                        <div id="player-1-record" className="score-block">
                            <h3>Player 1</h3>
                            <span className="total-games-won-1">0</span>
                        </div>
                    <div id="player-2-record" className="score-block">
                        <h3>Player 2</h3>
                        <span className="total-games-won-2">0</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default scoreboard;
