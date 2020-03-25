import React, { Component } from 'react'
import { ContactMethod, SkillPoint } from './components/Snacks'
import { icons, projects } from './components/Images'


export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: {
                isEmail: true,
                isGithub: false,
                isLinkedin: false,
                isTwitter: false
            },
            ghost: {
                isName: false
            },
            heights: {
                name: ''
            }
        }
        this.determineHeights = this.determineHeights.bind(this)
        this.goGoGadgetGhostInput = this.goGoGadgetGhostInput.bind(this)
        this.resizeFont = this.resizeFont.bind(this)
        this.toggleContactMethod = this.toggleContactMethod.bind(this)
    }

    determineHeights() {
        this.setState({
            heights: {
                ...this.state.heights,
                name: document.getElementById('user-name').offsetHeight
            }
        })
    }

    goGoGadgetGhostInput(type, userInput) {
        if (type === "name") {
            this.setState({    
                ghost: {
                    ...this.state.ghost,
                    isName: true
                }
            })
        }
    }

    resizeFont(type, charNumber) {
        const num = charNumber.length

        if (num <= 12) {
            return 2.5
        } else if (num > 12 && num <= 20) {
            return 1.9
        } else if (num > 20) {
            return 1.5
        }
    }

    toggleContactMethod(method) {
        if (method === 'email') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: true,
                    isGithub: false,
                    isLinkedin: false,
                    isTwitter: false
                }
            })
        } else if (method === 'github') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: true,
                    isLinkedin: false,
                    isTwitter: false
                }
            })
        } else if (method === 'linkedin') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: false,
                    isLinkedin: true,
                    isTwitter: false
                }
            })
        } else if (method === 'twitter') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: false,
                    isLinkedin: false,
                    isTwitter: true
                }
            })
        }
    }

    componentDidMount() {
        this.determineHeights()
        window.addEventListener('resize', this.determineHeights)
    }

    render() {
        return (
            <React.Fragment>
                <div className="user-profile" style={{
                    backgroundImage: `url(${require('../images/users/taegeuk-heaven.jpg')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.currentWidth + 'px',
                }}>
                    <div className="profile-cover" style={{ height: this.props.sizes.currentWidth + 'px' }}>
                        <div className="profile-data">
                            <div className="data-header">
                                <p className="user-designation">Full-Stack Web Developer</p>
                                <input type="text" className={this.state.ghost.isName ? `ghost ghost-name` : `hidden`} placeholder="Winslow Mays" style={{
                                    height: this.state.heights.name + 'px',
                                    fontSize: this.resizeFont("name", "Winslow Mays") + 'rem'
                                }} />
                                <h1 id="user-name"
                                    onClick={() => { this.goGoGadgetGhostInput("name", "Winslow Mays")}}
                                    className={this.state.ghost.isName ? `hidden` : `user-name`}
                                    style={{
                                        fontSize: this.resizeFont("name", "Winslow Mays") + 'rem'
                                    }}>Winslow Mays</h1>
                                <div className="user-contacts">
                                    <ContactMethod
                                        address="winslow@lighterfluid.co"
                                        addressType="mail"
                                        icon={icons.email}
                                        iconAlt="email icon"
                                        method="email"
                                        reach="winslow@lighterfluid.co"
                                        toggleContactMethod={this.toggleContactMethod}
                                        visible={this.state.contacts.isEmail} />

                                    <ContactMethod
                                        address="https://github.com/winslowdev"
                                        addressType="external"
                                        icon={icons.github}
                                        iconAlt="github icon"
                                        method="github"
                                        reach="@winslowdev"
                                        toggleContactMethod={this.toggleContactMethod}
                                        visible={this.state.contacts.isGithub} />

                                    <ContactMethod
                                        address="https://linkedin.com/in/winslowmays"
                                        addressType="external"
                                        icon={icons.linkedin}
                                        iconAlt="linkedin icon"
                                        method="linkedin"
                                        reach="in/winslowmays"
                                        toggleContactMethod={this.toggleContactMethod}
                                        visible={this.state.contacts.isLinkedin} />

                                    <ContactMethod
                                        address="http://twitter.com/winslowdev"
                                        addressType="external"
                                        icon={icons.twitter}
                                        iconAlt="twitter icon"
                                        method="twitter"
                                        reach="@winslowdev"
                                        toggleContactMethod={this.toggleContactMethod}
                                        visible={this.state.contacts.isTwitter} />
                                </div>
                            </div>

                            <div className="data-about">
                                <p className="data-title">About</p>
                                <p className="about-me">Working in linguistics taught me that solving problems isn't always as easy as ABC. Whether it's reworking an existing project or coding a new one from the root up, I know how to translate everything you're looking for into a product that's right for U. </p>
                            </div>

                            <div className="data-skills">
                                <p className="data-title">Skills</p>
                                <div className="skills-grid">
                                    <SkillPoint skill="HTML5" />
                                    <SkillPoint skill="CSS3" />
                                    <SkillPoint skill="AngularJS" />
                                    <SkillPoint skill="Heroku" />
                                    <SkillPoint skill="SASS" />
                                    <SkillPoint skill="JavaScript" />
                                    <SkillPoint skill="GitHub" />
                                    <SkillPoint skill="BCrypt" />
                                    <SkillPoint skill="React" />
                                    <SkillPoint skill="Figma" />
                                    <SkillPoint skill="React Native" />
                                    <SkillPoint skill="3rd Party APIs" />
                                    <SkillPoint skill="jQuery" />
                                    <SkillPoint skill="SQL" />
                                    <SkillPoint skill="Version Control" />
                                    <SkillPoint skill="Microsoft Visual Studio Code" />
                                </div>
                            </div>

                            <div className="data-projects">
                                <p className="data-title">Personal Work</p>
                                <div className="project-grid">
                                    <h2>romanizeMeCaptain</h2>
                                    <img src={projects.romanizeMeCaptain} alt="romanizeMeCaptain" />
                                    <p className="project-about">Need something modern like a simple US date format more complicated? Thanks to HTML5, CSS3, and vanilla JavaScript, get it with cumbersome Roman numerals instead of Arabic ones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}