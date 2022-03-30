import React from "react";
import Player2 from "./player2";
import Player1 from './player1';
import $ from "jquery";

function Players() {

    var $numDiv = $(".col-1");

    $numDiv.on("click", function() {
        $(this).toggleClass("selected");
        
    });

    return(
        <div>
            <Player1 />
            <Player2 />
        </div>
    )
}
export default Players;