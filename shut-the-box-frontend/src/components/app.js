import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import Cookies from 'js-cookie';
import Home from "./pages/home";
import SignUp from './auth/signUp';
import LogIn from './auth/logIn';
import ShutTheBox from './pages/game/ShutTheBox';
import NoMatch from "./pages/No-Match";
import NavBar from './navi/NavBar';
import GameMenu from "./pages/game/Menu/GameMenu";
import HowToPlay from './pages/game/Menu/HowToPlay';

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (Cookies.get('username')) {
            setLoggedIn(true)
        }
    })

    const logout = () => {
        Cookies.remove('username')
        setLoggedIn(false)
    }

    const routes = {
        '/': () => <Home  />,
        '/ShutTheBox' : () => <ShutTheBox loggedIn = {loggedIn} />,
        '/SignUp': () => <SignUp />,
        '/LogIn': () => <LogIn />,
        '/GameMenu': () => <GameMenu />,
        '/HowToPlay': () => <HowToPlay />

    }

    const routeResult = useRoutes(routes)

    return (
        <div className = 'App'>
            <NavBar loggedIn = {loggedIn} logout = {logout}/>
            {routeResult || < NoMatch />}
        </div>
    )
}

export default App;