import React from "react";
import $ from "jquery";



function Switch()  {
    $(document).ready(function(){
        $(".btn001").on({

            click: function(){
                $(this).css("background-color", "red");
            }
        });
    });

    function check() {
       if ($('red').checked = false) {
           const sum  = ('red')
           console.log(red)
       }
    }




        return (
            <div className="main2">
                <div className="flip-cards" id="flip-cards">

                    <div className="card">
                        <button className="btn001" onClick={check()}>1</button>
                    </div> 

                    <div className="card">
                        <button className="btn001" onClick={check()}>2</button>
                    </div>

                    <div className="card">
                        <button className="btn001" onClick={check()}>3</button>
                    </div>

                    <div className="card">
                        <button className="btn001" onClick={check()}>4</button>
                    </div> 

                    <div className="card">
                        <button className="btn001" onClick={check()}>5</button>
                    </div>

                    <div className="card">
                        <button className="btn001" onClick={check()}>6</button>
                    </div>

                    <div className="card">
                        <button className="btn001" onClick={check()}>7</button>
                    </div> 

                    <div className="card">
                        <button className="btn001" onClick={check()}>8</button>
                    </div>

                    <div className="card">
                        <button className="btn001" onClick={check()}>9</button>
                    </div>

                </div>
            </div>
        )
}

export default Switch;
