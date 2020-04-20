// ============================== IMPORTS

import React, { Component } from 'react';
import { Header, Hero, SquareTile } from '../universals/Snacks'
import { highlightPunctuation } from '../universals/Functions'
import { stock } from '../universals/Images'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header home theme={this.props.theme} />
                <Hero
                    statement={[`We turn good concepts`, <br />, `into great web apps.`]}
                    theme={this.props.theme} />

                <nav>
                    <SquareTile
                        address="developers"
                        label="Developers"
                        image={stock.elCapitan}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="work"
                        label="Projects"
                        image={stock.goldenGate}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="services"
                        label="Services"
                        image={stock.hollywoodSign}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="contact"
                        label="Contact"
                        image={stock.bixbyBridge}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                </nav>

            </React.Fragment>
        )
    }
}

export class Home2000 extends Component {
    render() {
        return (
            <React.Fragment>
                <Header home theme={this.props.theme} />
                <Hero
                    statement={'We turn good concepts into great web apps.'}
                    theme={this.props.theme} />

                <div className="spotlight">
                    <h3>Latest Project</h3>
                    <h5>John Q. Citizen<br />portfolio redesign</h5>
                    <button>Check it out</button>
                </div>

                <div className="spotlight-devs">
                    <h4>We are two freelance developers located on opposite sides of the US. We work independently, but occasionally, we make stuff together.</h4>

                    <div className="profile-link-space">
                        <div className="profile-intro">
                            <img src={stock.gazingMan} alt="human left" />
                            <h2>Winslow <br />Mays</h2>
                        </div>

                        <div className="profile-intro">
                            <img src={stock.hopeMan} alt="human left" />
                            <h2>Ross <br />Davidson</h2>
                        </div>
                    </div>
                </div>

                <div className="spotlight-skills">

                </div>

                <div id="contact-us">
                    <div className="contact-us-column">
                        <h2>{highlightPunctuation("Let's work together.")}</h2>
                        <p>Whether you’re looking to rework an existing project or code a new one from the root up, let's work together to find you the right solution.</p>
                    </div>

                    <div className="contact-us-column">
                        <p>Before reaching out, think about anything you'd like me to know for the project — key points, budget, deadline, photos of your cat.</p>
                        <p className="second-par">Even if you're not sure if the information is relevant, it probably won't hurt to mention it. Just throw it out there like a basketball into the Grand Canyon.</p>
                    </div>

                    <div className="contact-us-column">
                    <p>If you're ready, click the button below or just email me directly at <span className="email-link">hello@lighterfluid.co</span>. You can expect a response from a real human (that's me) within 24 hours.</p>

                    <button>Send up an email</button>
                    </div>
                    






                    {/* <aside>
                        <div className="preview">
                            <h2>{highlightPunctuation("Let's work together.")}</h2>
                            <p className="caption">Whether you’re looking to rework an existing project or code a new one from the root up, let's work together to find you the right solution.</p>
                        </div>
                    </aside>

                    <main>
                        <div className="hire-s1">
                            <p className="s1-p1">Before reaching out, think about anything you'd like me to know for the project — key points, budget, deadline, photos of your cat.</p>

                            <p>Even if you're not sure if the information is relevant, it probably won't hurt to mention it. Just throw it out there like a basketball into the Grand Canyon.</p>
                        </div>


                        <div>
                            <p>If you're ready, click the button below or just email me directly at <span className="fweight-700">winslow@lighterfluid.co</span>. You can expect a response from a real human (that's me) within 24 hours.</p>

                        </div>
                    </main> */}
                </div>

            </React.Fragment>
        )
    }
}