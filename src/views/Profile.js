import React, { Component } from 'react'
import { stock } from '../universals/Images'
import { SquareTile, Team } from '../universals/Snacks'

export class Profile extends Component {
    render() {
        const theme = this.props.theme

        return (
            <div id="profile">

                {/* PROFILE IMAGE, NAME, DESIGNATION */}
                <div className="header marginalized">
                    <img src={stock.hopeMan} alt="profile picture" />
                    <h3 className={theme.passiveText}>J. Benjamin Nimble</h3>
                    <p className={theme.passiveTitle}>Software Engineer</p>
                </div>

                {/* BRAND STATEMENT */}
                <p className={`marginalized ${theme.passiveText}`}>Enim sed montes, maecenas ut sem vivamus quis. Sed eleifend metus a erat elementum eu egestas magna. Magnis non, egestas lectus sed. Ante leo sapien euismod lorem ac quam.</p>

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
                <div className="skills marginalized">
                    <h3 className={theme.passiveTitle}>Stacks, languages & frameworks</h3>
                    <ul className="skill-grid">
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>HTML5</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>CSS3</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>Ruby on Rails</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>React</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>Microsoft Visual Studio Code</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>Figma</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>BCrypt</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>MEAN stack</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>MongoDB</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>Version control systems</li>
                        <li className={`${theme.backgroundInverted} ${theme.passiveText}}`}>JavaScript</li>
                    </ul>
                </div>

                {/* PROJECTS */}
                <div className="projects">
                    <h3 className={`marginalized ${theme.passiveTitle}`}>Projects</h3>
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
            </div>
        )
    }
}