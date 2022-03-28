import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { navigate } from 'hookrouter';


export default function SignUp() {

    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {  
        e.preventDefault();     

        if(username === '' || password === '' || confirmPassword === '') {
            setError(true);
            setErrorMessage('Error: All fields must be completed.')
        } else if(password !== confirmPassword) {
            setError(true);
            setErrorMessage('Error: Passwords must match!')
        } else {
            fetch('http://localhost:5000/user', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res === "Error: the username you've entered has been taken") {
                    setError(true);
                    setErrorMessage("Error: the username you've entered has been taken")
                } else {
                    console.log(username)
                    setError(false);
                    setErrorMessage('');
                    Cookies.set('username', username);
                    navigate('http://localhost:3000/LogIn');
                }
            })
        }
    }

    useEffect(() => {
        setError(false);
        setErrorMessage('');
    },[username, password, confirmPassword])

    return (
        <div className = "signup-container">
            <h2>SIGNUP</h2>
            <form className = "form-container" onSubmit={(e) => handleSubmit(e)} >
                <input className="inp1" type = "text" placeholder = "username" name = "username" value = {username} onChange = {(e) => setusername(e.target.value)} />
                <input className="inp1" type = "password" placeholder = "Password" name = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                <input className="inp1" type = "password" placeholder = "Confirm Password" name = "confirmpassword" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} />

                <button className = "inp1" type="submit" >
                    Submit
                </button>
            </form>
            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
    )
    
}