import React, { Component } from "react";

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,            
        };

        window.addEventListener("scroll", this.onScroll, true);
    }
    
    
    

    render() {
        return (
            <div>
                <div className = "home-container" onSubmit={(e) => handleSubmit(e)} >
                    <h3>Welcome to Shut the Box</h3>
                    <div className="spacer-10"></div>
                        <span className = "Para">
                            <ul>This game can be played with:
                                    <li>  VS AI </li>
                                    <li>  VS Another Player </li>
                            </ul>

                            <ul>Objective of the Game:
                                    <li>  Close all NINE tabs by rolling the dices </li>
                            </ul>

                            <ul>How to Play the SHUT THE BOX:
                                <li>  Player rolls the dices</li>
                                <li>  Screen will show the Total of the two dices from Which ever side both dices stop</li>
                                <li>  Player is going to close the tab accordingly with the Total</li>
                                <li>  If player can not close any tab accordingly with the total</li>
                                <li>  Player is busted and next player plays</li>
                                <li>  First player who can close all the tabs in Player's turn is the WINNER</li>
                            </ul>
                        </span>        
                </div>
            </div>
        )
    }
}

