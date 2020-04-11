import React, { Component } from 'react'
import { stock } from '../universals/Images'
import { Header, SquareTile, Team } from '../universals/Snacks'

export class Profile extends Component {
    render() {
        const theme = this.props.theme

        return (
            <React.Fragment>

                <Header
                    second
                    theme={this.props.theme}
                    pageHeader="Developers" />

                <main id="dev-profile">

                    {/* PROFILE IMAGE, NAME, DESIGNATION */}
                    <div id="headspace" className="marginalized">
                        <img src={stock.hopeMan} alt="j. benjamin nimble" />
                        <h2 className={theme.headliner}>J. Benjamin Nimble</h2>
                        <h4 className={theme.unimportant}>Software Engineer</h4>
                    </div>

                    {/* BRAND STATEMENT */}
                    <p className={`marginalized rainclouds ${theme.unimportant}`}>Enim sed montes, maecenas ut sem vivamus quis. Sed eleifend metus a erat elementum eu egestas magna. Magnis non, egestas lectus sed. Ante leo sapien euismod lorem.</p>

                    <div id="prof-contact" className="marginalized">
                        <Team captain="Email" player="jack@lighterfluid.co" theme={theme} />
                        <Team captain="GitHub" player="@jackbnimble" theme={theme} />
                        <Team captain="LinkedIn" player="in/jackbnimble" theme={theme} />
                        <Team captain="Twitter" player="@jackbnimble" theme={theme} />
                    </div>

                    {/* CONTACT INFORMATION */}
                    {/* <div className="contacts marginalized">
                        <Team
                            captain="Email"
                            player="jack@lighterfluid.co"
                            theme={theme} />

                        <Team
                            captain="GitHub"
                            player="jackbnimble"
                            theme={theme} />

                        <Team
                            captain="LinkedIn"
                            player="jackbnimble"
                            theme={theme} />

                        <Team
                            captain="Portfolio"
                            player="jackbnimble.co"
                            theme={theme} />
                    </div> */}

                    {/* SKILLS */}
                    <div id="skills" className="section">
                        <h3 className={theme.unimportant}>Stacks, languages & frameworks</h3>
                        <ul>
                            <li className={`darkwhite ${theme.invertedBg}`}>HTML5</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>CSS3</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>Ruby on Rails</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>React</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>Figma</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>Microsoft Visual Studio Code</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>GitHub</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>BCrypt</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>MEAN stack</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>MongoDB</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>Version control systems</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>JavaScript</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>React Native</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>NERDS stack</li>
                            <li className={`darkwhite ${theme.invertedBg}`}>Git</li>
                        </ul>
                    </div>

                    {/* PROJECTS */}
                    <div id="projects" className="section projects">
                        <h3 className={`marginalized ${theme.unimportant}`}>Personal projects & client work</h3>
                        <div className="project-grid">
                            <SquareTile
                                address="projects/project-ex"
                                image={stock.elCapitan}
                                label="Fire Watch"
                                metrics={this.props.metrics}
                                theme={this.props.theme}
                                year="2019" />
                            <SquareTile
                                address="projects/project-ex"
                                image={stock.hollywoodSign}
                                label="Car Collection"
                                metrics={this.props.metrics}
                                theme={this.props.theme}
                                year="2013" />
                            <SquareTile
                                address="projects/project-ex"
                                image={stock.goldenGate}
                                label="Connectr"
                                metrics={this.props.metrics}
                                theme={this.props.theme}
                                year="2029" />
                            <SquareTile
                                address="projects/project-ex"
                                image={stock.bixbyBridge}
                                label="That Other Project"
                                metrics={this.props.metrics}
                                theme={this.props.theme}
                                year="2020" />
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}