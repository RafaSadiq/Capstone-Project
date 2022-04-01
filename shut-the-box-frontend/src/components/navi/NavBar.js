import React from 'react';
import { A } from "hookrouter";

function NavBar (props) {
    console.log(props);
    return (
        <div className='nav-container'>
            <div className='nav-props'>
                <A href = '/'>
                    HOME
                </A>
            </div>
            <div>
                {props.loggedIn ? null : < A href = '/LogIn' > 
                    LOGIN
                </A>}
                {props.loggedIn === true ? < A onClick = {() => props.logout()} href = '/' >
                    LOGOUT
                </A> : null }
            </div>

            <div>
                {props.loggedIn ? null : < A href = '/SignUp' > 
                    SIGNUP
                </A>}
                {props.loggedIn === true ? < A href = '/GameMenu' >
                    GAME MENU
                </A> : null }
            </div>




        </div>
    )
}

export default NavBar;