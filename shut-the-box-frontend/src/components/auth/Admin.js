import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import Cookies from 'js-cookie';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();        

        if(username === '' || password === '') {
            setError(true);
            setErrorMessage('Error: All fields must be filled in!');
        } else {
            fetch('http://localhost:5000/user', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    "content-type" : "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            
            .then(res => res.json())
            .then(res => { 
                console.log(res)        
                if(res === 'User NOT verified.') {
                    console.log(res)
                    setError(true);
                    setErrorMessage('Invalid username or password.');
                } else if(res === 'User has been verified') {
                    console.log('you are logged IN')
                    Cookies.set('username', username);
                    navigate('/');
                }
            })
            .catch(error => {
                // console.log('no shit')  
                setError(true);
                setErrorMessage('Error logging in, please try again.');
            })
        }
    }

    useEffect(() => {
        setError(true);
        setErrorMessage('');
    },[username, password])

    


    return (
        <div className="login-container">
            <h2>LOGIN FOR THE GAME MENU</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="inp2" type="text" placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)}/>
                <input className="inp2" type="text" placeholder="Password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/>

                <button className="inp2" type="submit">Submit</button>
            </form>
            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
    )
}