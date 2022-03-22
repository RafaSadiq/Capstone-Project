import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import Cookies from 'js-cookie';
import Home from "./pages/home";
import NavBar1 from './navi/NavBar1';
import SignUp from './auth/signUp';
import LogIn from './auth/logIn';
import ShutTheBox from './pages/game/ShutTheBox';
import NoMatch from "./pages/No-Match";

export default function App() {
    const [ loggedIn, setLoggedIn ] = useState(false)

    useEffect(() => {
        if(Cookies.get('username', 'password')) {
           setLoggedIn(true) 
        }
    })

    const logout = () => {
        Cookies.remove('username')
        setLoggedIn(false)
    }

    const routes = {
        '/': () => <Home  />,
        '/ShutTheBox' : () => <ShutTheBox loggedIn = { loggedIn } />,
        '/SignUp': () => <SignUp />,
        '/LogIn': () => <LogIn />

    }

    const routeResult = useRoutes(routes)

        return (
            <div className = 'App'>
                <NavBar1 logout = { logout } />
                {routeResult || < NoMatch />}
            </div>

        );

}
