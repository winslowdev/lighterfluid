// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState } from 'react'
import axios from 'axios'
import { IconContext } from 'react-icons'
import { IoMdMail } from 'react-icons/io'
import { RiLockPasswordLine, RiSpyLine } from 'react-icons/ri'

import { Hero } from '../supplements/Snacks'


// ============================== CHECKPOINT: LOGIN & SIGNUP
// ============================== CHECKPOINT: LOGIN & SIGNUP

export function Checkpoint() {
    const [isInvitation, setIsInvitation] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function createAccount(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        const newUser = {
            email: email,
            password: password
        };

        axios.post('http://localhost:4000/api/users', newUser)
            .then(res => console.log(res.data));

        setEmail('')
        setPassword('')
    }

    function login(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        const user = {
            email: email,
            password: password
        };

        axios.post('http://localhost:4000/api/sessions', user)
            .then(res => console.log(res.data));

        setEmail('')
        setPassword('')
    }

    function toggleFormType() {
        if (isInvitation === true) {
            setIsInvitation(false)
            setIsLogin(true)
        } else {
            setIsInvitation(true)
            setIsLogin(false)
        }
    }

    return (
        <div className="container">
            <Hero
                hero={isInvitation ? "For members only. Log in with email and password." : "Join the lighter side. By invitation only."} />

            <div id="registration" className="margined">
                <div className="faux-button">
                    <p onClick={() => { toggleFormType() }}>{isInvitation ? "Joining with an invite code?" : "Already have an account?"}</p>
                    <div className="link-underline"></div>
                </div>
                <IconContext.Provider value={{ color: "#797d83" }}>

                    {isLogin ? <form id="join-form" onSubmit={createAccount}>

                        <div className="input-row">
                            <label htmlFor="email" hidden>Email</label>
                            <div className="sticker"><IoMdMail /></div>
                            <input type="email" placeholder="email address" value={email} onChange={onChangeEmail} />
                        </div>

                        <div className="input-row">
                            <label htmlFor="password" hidden>Password</label>
                            <div className="sticker"><RiLockPasswordLine /></div>
                            <input type="password" placeholder="password" value={password} onChange={onChangePassword} />
                        </div>

                        <div className="submit-row">
                            <div className="input-row">
                                <label htmlFor="code" hidden>Invite code</label>
                                <div className="sticker"><RiSpyLine /></div>
                                <input type="text" placeholder="code" />
                            </div>

                            <input type="submit" className="go-button" value="Go" />
                        </div>
                    </form>

                        : <form id="login-form" onSubmit={login}>
                            <div className="input-row">
                                <div className="sticker"><IoMdMail /></div>
                                <input type="email" placeholder="email address" value={email} onChange={onChangeEmail} />
                            </div>

                            <div className="submit-row">
                                <div className="input-row">
                                    <div className="sticker"><RiLockPasswordLine /></div>
                                    <input type="password" placeholder="password" value={password} onChange={onChangePassword} />
                                </div>

                                <input type="submit" className="go-button" value="Go" />
                            </div>
                        </form>}

                </IconContext.Provider>
            </div>
        </div>
    )
}