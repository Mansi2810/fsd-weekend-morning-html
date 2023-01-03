import React from 'react'
import { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login() {

        if (username && password) {
            fetch(`http://localhost:3001/authenticate?username=${username}&password=${password}`)
                .then(s => s.json())
                .then(response => {

                    if (response.result == true) {
                        alert('Ok')
                        //redirect
                    } else {
                        alert('Invalid')
                        //no redirect
                    }

                    setUsername('')
                    setPassword('')

                })
        } else {
            alert('Required username and password')
        }
    }

    function signUp() {
        fetch(`http://localhost:3001/create-new-user?username=${username}&password=${password}`)
            .then(s => s.json())
            .then(response => {

                if (response.result == true) {
                    alert('User added.')
                } else {
                    alert('Already present.')
                }

            })
    }

    return (
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='Username' />
            <input value={password} onChange={e => setPassword(e.target.value)} type='text' placeholder='Password' />
            <button onClick={login}>Login</button>
            <button onClick={signUp}>SignUp</button>
        </div>
    )
}
