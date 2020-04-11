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
                    thisPageTitle="Developers" />

                <main id="dev-profile">

                    {/* PROFILE IMAGE, NAME, DESIGNATION */}
                    <div id="headspace" className="marginalized">
                        <img src={stock.hopeMan} alt="j. benjamin nimble" />
                        <h2 className={theme.passiveTitle}>J. Benjamin Nimble</h2>
                        <h4 className={theme.passiveText}>Software Engineer</h4>
                    </div>

                    {/* BRAND STATEMENT */}
                    <p className={`marginalized ${theme.passiveText}`}>Enim sed montes, maecenas ut sem vivamus quis. Sed eleifend metus a erat elementum eu egestas magna. Magnis non, egestas lectus sed. Ante leo sapien euismod lorem.</p>

                    {/* CONTACT INFORMATION */}
                    <div className="contacts marginalized">
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
                    </div>

                    {/* SKILLS */}
                    <div id="skills" className="section">
                        <h3 className={theme.passiveTitle}>Stacks, languages & frameworks</h3>
                        <ul>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>HTML5</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>CSS3</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>Ruby on Rails</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>React</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>Figma</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>Microsoft Visual Studio Code</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>GitHub</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>BCrypt</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>MEAN stack</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>MongoDB</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>Version control systems</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>JavaScript</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>React Native</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>NERDS stack</li>
                            <li className={`text-ocean7 ${theme.backgroundInverted}`}>Git</li>
                        </ul>
                    </div>

                    {/* PROJECTS */}
                    <div id="projects" className="section projects">
                        <h3 className={`marginalized ${theme.passiveTitle}`}>Personal projects & client work</h3>
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