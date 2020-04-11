import React, { Component } from 'react'
import { Header, Hero } from '../universals/Snacks'
import { navigateTo } from '../universals/Functions'

export class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Hero
                    statement="Get in touch with us sometime."
                    theme={this.props.theme} />

                <main id="contact" className="marginalized">
                    <p>If you know the developer you want
                    to work with, you can email them directly.
                    If not, send a message to the collective
                    email address and one of us will get back
                to you—generally within 24 hours.</p>

                    <h4 className="centered">Tell them you said hi?</h4>
                    <h4 onClick={() => { navigateTo("email", "hello@lighterfluid.co") }}>hello@lighterfluid.co</h4>
                </main>


            </React.Fragment>
        )
    }
}