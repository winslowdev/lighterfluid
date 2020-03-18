import React, { Component } from 'react';
import { HeaderInformation } from '../Snacks'

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle={this.props.welcome.login}
                    pageDescription="This page is only for developers with an account. To join the Lighterfluid network, reach out at contact@lighterfluid.co." />

                <form id="login-form">
                    <label for="email" hidden>sds</label>
                    <div className="tag-team">
                        <div className="label">
                            email
                        </div>
                        <input type="email" id="email" placeholder="enter your email address" />
                    </div>

                    <label for="password" hidden>sds</label>
                    <div className="tag-team">
                        <div className="label">
                            password
                        </div>
                        <input type="password" id="password" placeholder="enter your password" />
                    </div>

                    <button type="submit">log in</button>
                </form>
            </React.Fragment>
        )
    }
}