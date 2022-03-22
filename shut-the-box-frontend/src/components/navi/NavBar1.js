import React from 'react';
import { A } from "hookrouter";

function NavBar1 () {

    return (
        <div className = 'nav-container'>
            <div className = 'nav-link'> {/* HOME */}
                    <button>
                        <A className = 'link' href = '/'>
                            HOME
                        </A>
                    </button>
            </div>

            <div className = 'nav-link'> {/* SHUT THE BOX */}
                <button>
                    <A className = 'link' href = '/ShutTheBox'>
                        SHUT THE BOX
                    </A>
                </button>                    
            </div>

                <div className = 'nav-link'> {/* LOGIN */}
                <button>
                    <A className='Link' href='/LogIn'>
                        LOGIN
                    </A>
                </button>
            </div>

            <div className = 'nav-link'> {/* SIGNUP */}
                <button>
                    <A className='Link' href='/SignUp'>
                        SIGNUP
                    </A>
                </button>
            </div>

            <div className = 'nav-link'> {/* EXIT GAME */}
                <button>
                    <A className = 'link' href = '/' >
                            EXIT GAME
                    </A>
                </button>
            </div>
        </div>
    )
}

export default NavBar1;


    {/* If user not logged in show login and signup
        if user is logged in show home shut the box and logout

        Ternary operator itself
        { !props.loggedIn ? (
            <Link className='Link' to='/LogIn'> and signup as well
                <li>LogIn</li>
            </Link><
        ):null
        }

        Ternary operator for other links logout, home etc
        {props.loggedIn ? (
            logout link, homne and shut the box links
        ): null}
        */}
                                
     



 