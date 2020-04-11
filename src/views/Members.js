// ============================== IMPORTS
// ============================== IMPORTS

import React, { Component } from 'react'

import { Header, Hero } from '../universals/Snacks'
import { icons } from '../universals/Images'
import { addThemeDescription } from '../universals/Functions'

import axios from 'axios'


export class Members extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isInvitationOn: false,
            isLoginOn: true,
            password: ''
        }
        this.createAccount = this.createAccount.bind(this)
        this.login = this.login.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.toggleFormType = this.toggleFormType.bind(this)
    }

    toggleFormType() {
        this.setState({
            isInvitationOn: !this.state.isInvitationOn,
            isLoginOn: !this.state.isLoginOn,
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    createAccount(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:4000/api/users', newUser)
            .then(res => console.log(res.data));

        this.setState({
            email: '',
            password: ''
        })
    }

    login(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:4000/api/sessions', user)
            .then(res => console.log(res.data));

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const renderFormMessage = () => {
            if (this.state.isLoginOn) {
                return "Already have an account?"
            } else {
                return "Joining with an invite code?"
            }
        }

        const renderHero = () => {
            if (this.state.isInvitationOn) {
                return "Members only. Sorry."
            } else {
                return [`Join the ${addThemeDescription()} side.`, <br />, `By invitation only.`]
            }
        }

        return (
            <React.Fragment>
                <Header
                    first
                    theme={this.props.theme}
                    pageHeader={[`Welcome to the`, <br />, `secret lair.`]} />
                <Hero
                    statement={renderHero()}
                    theme={this.props.theme} />

                <main id="registration">
                    <p onClick={() => { this.toggleFormType() }} className={this.props.theme.unimportant}>{renderFormMessage()}</p>

                    {this.state.isLoginOn ? <form id="join-form" onSubmit={this.createAccount}>

                        <div className="input-row">
                            <label for="email" hidden>Email</label>
                            <div className="sticker"><img src={icons.email} alt="email icon" /></div>
                            <input type="email" placeholder="email address" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>

                        <div className="input-row">
                            <label for="password" hidden>Password</label>
                            <div className="sticker"><img src={icons.password} alt="email icon" /></div>
                            <input type="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>


                        <div className="submit-row">
                            <div className="input-row">
                                <label for="code" hidden>Invite code</label>
                                <div className="sticker"><img src={icons.code} alt="code icon" /></div>
                                <input type="text" placeholder="code" />
                            </div>

                            <input type="submit" className="go-button" value="Go" />
                        </div>
                    </form>

                        : <form id="login-form" onSubmit={this.login}>
                            <div className="input-row">
                                <div className="sticker"><img src={icons.email} alt="email icon" /></div>
                                <input type="email" placeholder="email address" value={this.state.email} onChange={this.onChangeEmail} />
                            </div>

                            <div className="submit-row">
                                <div className="input-row">
                                    <div className="sticker"><img src={icons.password} alt="email icon" /></div>
                                    <input type="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
                                </div>

                                <input type="submit" className="go-button" value="Go" />
                            </div>
                        </form>}
                </main>
            </React.Fragment>
        )
    }
}
