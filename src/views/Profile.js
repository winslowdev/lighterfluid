// ============================== IMPORTS

import React, { Component } from 'react'
import { icons, projects, stock } from '../universals/Images'
import { Team, TeamLeader, DirectDownload, Bullet } from '../universals/Snacks'


// ============================== PROFILE ON MOBILE

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

    componentDidMount() {
        this.determineHeights()
        window.addEventListener('resize', this.determineHeights)
    }

    render() {
        return (
            <React.Fragment>
                <div className="user-profile" style={{
                    backgroundImage: `url(${stock.genericMale})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.currentWidth + 'px',
                }}>
                    <div className="profile-cover" style={{ height: this.props.sizes.currentWidth + 'px' }}>
                        <div className="profile-data">
                            <div className="data-header">
                                <p className="user-designation">Full-Stack Web Developer</p>
                                <input type="text" className={this.state.ghost.isName ? `ghost ghost-name` : `hidden`}
                                    placeholder="Winslow Mays"
                                    onBlur={() => { this.resizeFont("name", "Ghost inputs rocksss") }}
                                    style={{
                                        height: this.state.heights.name + 'px',
                                        fontSize: this.resizeFont("name", "Winslow Mays") + 'rem'
                                    }} />
                                <h1 id="user-name"
                                    onClick={() => { this.goGoGadgetGhostInput("name", "Winslow Mays") }}
                                    className={this.state.ghost.isName ? `hidden` : `user-name`}
                                    style={{
                                        fontSize: this.resizeFont("name", "Winslow Mays") + 'rem'
                                    }}>Winslow Mays</h1>
                                <div className="user-contacts">
                                    
                                </div>
                            </div>

                            <div className="data-about">
                                <p className="data-title">About</p>
                                <p className="about-me">Working in linguistics taught me that solving problems isn't always as easy as ABC. Whether it's reworking an existing project or coding a new one from the root up, I know how to translate everything you're looking for into a product that's right for U. </p>
                            </div>

                            <div className="data-skills">
                                <p className="data-title">Skills</p>
                                <div className="skills-grid">
                                    <Bullet skill="HTML5" />
                                    <Bullet skill="CSS3" />
                                    <Bullet skill="AngularJS" />
                                    <Bullet skill="Heroku" />
                                    <Bullet skill="SASS" />
                                    <Bullet skill="JavaScript" />
                                    <Bullet skill="GitHub" />
                                    <Bullet skill="BCrypt" />
                                    <Bullet skill="React" />
                                    <Bullet skill="Figma" />
                                    <Bullet skill="React Native" />
                                    <Bullet skill="3rd Party APIs" />
                                    <Bullet skill="jQuery" />
                                    <Bullet skill="SQL" />
                                    <Bullet skill="Version Control" />
                                    <Bullet skill="Microsoft Visual Studio Code" />
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

// ============================== PROFILE ON LARGE MONITORS

export class ProfileLarge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: {
                skills: true,
                projects: false,
                resume: false,
            }
        }
        this.loadSection = this.loadSection.bind(this)
    }

    loadSection(section) {
        if (section === "skills") {
            this.setState({
                sections: {
                    ...this.state.section,
                    skills: true,
                    projects: false,
                    resume: false
                }
            })
        } else if (section === "projects") {
            this.setState({
                sections: {
                    ...this.state.section,
                    skills: false,
                    projects: true,
                    resume: false
                }
            })
        } else if (section === "resume") {
            this.setState({
                sections: {
                    ...this.state.section,
                    skills: false,
                    projects: false,
                    resume: true
                }
            })
        }
    }


    render() {
        return (
            <div className="profile-4k">

                <aside className="user-intro">

                    {/* PROFILE IMAGE, NAME, DESIGNATION */}
                    <div className="ui-header">
                        <img src={stock.genericMale} alt="profile-img" className="uih-image" />

                        <div className="uih-info">
                            <h1 className="uihi-name">J. Benjamin Nimble</h1>
                            <p className="uihi-designation important">UX Designer & Front-End Developer <span className="unimportant">in Toronto</span></p>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <p className="ui-summary">Quis non, nulla facilisis tempor tortor id. Tortor enim lectus ac, in. Tortor mattis blandit cras congue cursus tortor mauris risus vestibulum. Porta adipiscing neque suspendisse arcu adipiscing sociis. Porta placerat at velit enim sit tincidunt sem adipiscing. Fusce sed egestas sit rutrum.</p>

                    <div className="contacts">
                        <Team
                            captain="Email"
                            player="jack@lighterfluid.co" />

                        <Team
                            captain="LinkedIn"
                            player="winslowmays" />

                        <Team
                            captain="GitHub"
                            player="jackbnimble" />

                        <Team
                            captain="Twitter"
                            player="jackbnimble" />

                        <div className="contact-directs">
                            <TeamLeader
                                captain="Personal website"
                                address="https://wins.dev" />

                            <DirectDownload
                                captain="Download resume as PDF"
                                address="https://drive.google.com/file/d/1991ZbYlZhaNEdC7Y8qi_hnVY2os3gc3h/view?usp=sharing" />
                        </div>
                    </div>
                </aside>

                <div className="user-scroll">
                    <div className="nav-ribbon">
                        <h1 className={`ribbon-link anchorspoof ${this.state.sections.skills ? 'active' : 'unimportant'}`} onClick={() => { this.loadSection("skills") }}>Skills</h1>
                        <h1 className={`ribbon-link anchorspoof ${this.state.sections.projects ? 'active' : 'unimportant'}`} onClick={() => { this.loadSection("projects") }}>Projects</h1>
                        <h1 className={`ribbon-link anchorspoof ${this.state.sections.resume ? 'active' : 'unimportant'}`} onClick={() => { this.loadSection("resume") }}>Resume</h1>
                    </div>

                    {this.state.sections.skills ? <div className="skills-cloud">
                        <h1 className="skillbounce">HTML5</h1>
                        <h1 className="skillbounce">PostgreSQL</h1>
                        <h1 className="skillbounce">Python</h1>
                        <h1 className="skillbounce">CSS3</h1>
                        <h1 className="skillbounce">MEAN stack</h1>
                        <h1 className="skillbounce">GitHub</h1>
                    </div>

                        : null}


                </div>
            </div>
        )
    }
}