import React, { Component } from 'react'
import { icons } from '../universals/Images'
import { addThemeDescription } from '../universals/Functions'

export class Members extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvitationOn: false,
            isLoginOn: true
        }
        this.toggleFormType = this.toggleFormType.bind(this)
    }

    toggleFormType() {
        this.setState({
            isInvitationOn: !this.state.isInvitationOn,
            isLoginOn: !this.state.isLoginOn,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h6 className={this.props.theme.importantText}> {!this.state.isLoginOn ? ['Members only. Sorry.'] : [`Join the ${addThemeDescription()} side.`, <br />, `But only with an invite code.`]}</h6>
                </div>

                {this.state.isLoginOn ? <form id="join-form">
                    <p onClick={() => { this.toggleFormType() }} className={this.props.theme.passiveText}>Already have an account?</p>
                    <div className="input-bundle">
                        <div className="label"><img src={icons.email} alt="email icon" /></div>
                        <input type="email" placeholder="email address" />
                    </div>

                    <div className="input-bundle">
                        <div className="label"><img src={icons.password} alt="email icon" /></div>
                        <input type="password" placeholder="password" />
                    </div>

                    <div className="lastinput-submit">
                        <div className="input-bundle">
                            <div className="label"><img src={icons.code} alt="email icon" /></div>
                            <input type="text" placeholder="code" />
                        </div>

                        <input type="submit" className="go-button" value="Go" onClick={() => {this.props.provideInformation("dashboard")}} />
                    </div>
                </form>

                    : <form id="login-form">
                        <p onClick={() => { this.toggleFormType() }}
                            className={this.props.theme.passiveText}>Joining with an invite code?</p>
                        <div className="input-bundle">
                            <div className="label"><img src={icons.email} alt="email icon" /></div>
                            <input type="email" placeholder="email address" />
                        </div>

                        <div className="lastinput-submit">
                            <div className="input-bundle">
                                <div className="label"><img src={icons.password} alt="email icon" /></div>
                                <input type="password" placeholder="password" />
                            </div>

                            <input type="submit" className="go-button" value="Go" onClick={() => {this.props.provideInformation("dashboard")}} />
                        </div>
                    </form> }
            </React.Fragment>
        )
    }
}