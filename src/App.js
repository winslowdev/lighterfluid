// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { highlightPunctuation, navigate } from './universals/Functions';

import { Developers } from './views/Developers'
import { Home, HomeLarge } from './views/Home'
import { Profile, ProfileLarge } from './views/Profile'
import { ProjectItem } from './views/ProjectItem'
import { Projects } from './views/Projects'
import { Skills } from './views/Skills'
import { stock } from './universals/Images';


// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appStyle: {
                backgroundImage: '',
                backgroundPositionY: '',
                backgroundSize: '',
                gradientStyle: ''
            },
            currentHoverState: '',
            introStatement: '',
            isShowNavDrawer: false,
            sizes: {
                currentWidth: '',
                rectangleHeight: '',
                squareHeight: '',
                appBlurWidth: ''
            },
            statements: {
                developers: 'Developers',
                home: 'Captain Planet—he\'s our hero. Gonna take pollution down to zero.',
                projects: ['Collaborative', <br />, 'projects'],
                skills: ['Skills &', <br />, 'competencies']
            }
        }
        this.determineSizes = this.determineSizes.bind(this)
        this.setAppStyle = this.setAppStyle.bind(this)
        this.toggleNavDrawer = this.toggleNavDrawer.bind(this)
    }

    setAppStyle(navLink) {
        if (navLink === "work") {
            this.setState({
                introStatement: 'We work independently, but periodically come together to collaborate on a project—whether it’s for fun or for a client.',
                appStyle: {
                    ...this.props.appStyle,
                    backgroundImage: stock.goldenGateBridge,
                    backgroundPositionY: -200,
                    backgroundSize: 'cover',
                    gradientStyle: 'blue-yellow'
                }
            })
        } else if (navLink === "developers") {
            this.setState({
                introStatement: 'We are a network of freelance developers located throughout the United States—from sea to shining C#.',
                appStyle: {
                    ...this.props.appStyle,
                    backgroundImage: stock.elCapitan,
                    backgroundPositionY: -200,
                    backgroundSize: 'cover',
                    gradientStyle: 'blue-red'
                }
            })
        } else if (navLink === "contact") {
            this.setState({
                introStatement: 'We have a collective email address where all of our email goes, but each of us works independently of the other.',
                appStyle: {
                    ...this.props.appStyle,
                    backgroundImage: stock.bixbyCreekBridge,
                    backgroundPositionY: -200,
                    backgroundSize: 'cover',
                    gradientStyle: 'blue-green'
                }
            })
        } else {
            this.setState({
                introStatement: 'Nibh etiam egestas consectetur at vulputate. Egestas a enim ac lacinia venenatis pellentesque sem. Risus quam lectus donec donec dignissim at. Pretium aliquet ac pellentesque aenean tincidunt vitae. Mus faucibus amet etiam sit ornare et. Tortor.',
                appStyle: {
                    ...this.props.appStyle,
                    backgroundImage: '',
                    backgroundPositionY: '',
                    backgroundSize: '',
                    gradientStyle: ''
                }
            })
        }
    }

    determineSizes() {
        this.setState({
            sizes: {
                ...this.state.sizes,
                currentWidth: window.innerWidth,
                rectangleHeight: window.innerWidth * 0.4,
                squareHeight: window.innerWidth * 0.5,
                // appBlurWidth: Math.round(window.innerWidth * 0.05 + document.getElementById('app-title').offsetWidth + 50)
            }
        })
    }

    toggleNavDrawer() {
        this.setState({
            isShowNavDrawer: !this.state.isShowNavDrawer
        })
    }

    componentDidMount() {
        this.determineSizes()
        this.setAppStyle()

        window.addEventListener("resize", () => {
            this.determineSizes()
        })
    }

    render() {
        const innerWidth = this.state.sizes.currentWidth
        const appStyle = this.state.appStyle




        return (
            <Router>

                {/* ========== LARGEST LAYOUT @ 2000 PX */}
                {innerWidth >= 2000 ?

                    <div className="home-large" style={{
                        backgroundImage: `url(${appStyle.backgroundImage})`,
                        backgroundSize: appStyle.backgroundSize,
                        backgroundPositionY: appStyle.backgroundPositionY
                    }}>
                        <div className={`gradient-cover ${appStyle.gradientStyle}`}>

                            <div className="container" id="header">
                                <h6 onClick={() => { navigate(null, "/") }} id="app-title" className="anchorspoof">Lighterfluid</h6>
                                <p>{this.state.introStatement}</p>
                            </div>

                            <Route
                                path="/" exact
                                render={(props) => <HomeLarge {...props}
                                    setAppStyle={this.setAppStyle}
                                    setHoverState={this.setHoverState}
                                />} />
                        </div>
                    </div>

                    : null}












                {this.state.isShowNavDrawer === true ? <div className="nav-on">
                    <div className="bg-blur"
                        onClick={() => { this.toggleNavDrawer() }}
                        style={{ width: this.state.sizes.appBlurWidth + 'px' }}></div>
                    <div className="nav-drawer"
                        style={{ width: this.state.sizes.currentWidth - this.state.sizes.appBlurWidth + 'px' }}>
                        <h3 className="nav-link anchorspoof" onClick={() => { navigate("/projects") }}>{highlightPunctuation(this.state.statements.projects)}</h3>
                        <h3 className="nav-link anchorspoof" onClick={() => { navigate("/developers") }}>{highlightPunctuation(this.state.statements.developers)}</h3>
                        <h3 className="nav-link anchorspoof" onClick={() => { navigate("/skills") }}>{highlightPunctuation(this.state.statements.skills)}</h3>
                    </div>
                </div> : null}

                {window.innerWidth < 1000 ? <header>
                    <h6 onClick={() => { navigate(null, "/") }} id="app-title">Lighterfluid</h6>

                    {<Route path="/" exact /> ? <div className="nav-icon" onClick={() => { this.toggleNavDrawer() }}>
                        <div className="nav-icon-top"></div>
                        <div className="nav-icon-mid"></div>
                        <div className="nav-icon-btm"></div>
                    </div> : null}
                </header> : null}

                {window.innerWidth < 2000 ? <header>
                    <div className="container" id="header">
                        <h6 onClick={() => { navigate(null, "/") }} id="app-title" className="anchorspoof">Lighterfluid</h6>

                        <nav>
                            <p className="nav-link anchorspoof">{this.state.statements.developers}</p>
                            <p className="nav-link anchorspoof">{this.state.statements.projects}</p>
                            <p className="nav-link anchorspoof">{this.state.statements.skills}</p>
                        </nav>
                    </div>
                </header> : null}




                {innerWidth < 2000 ?
                    <main>
                        <Route
                            path="/" exact
                            render={(props) => <Home {...props}
                                sizes={this.state.sizes}
                                statements={this.state.statements}
                            />} />

                        <Route
                            path="/projects" exact
                            render={(props) => <Projects {...props}
                                sizes={this.state.sizes}
                                statements={this.state.statements} />} />

                        <Route
                            path="/projects/john-q" exact
                            render={(props) => <ProjectItem {...props}
                                sizes={this.state.sizes}
                                statements={this.state.statements} />} />

                        <Route
                            path="/developers" exact
                            render={(props) => <Developers {...props}
                                sizes={this.state.sizes}
                                statements={this.state.statements} />} />

                        {window.innerWidth < 2000 ? <Route
                            path="/profiles/jack" exact
                            render={(props) => <Profile {...props}
                                sizes={this.state.sizes}
                                statements={this.state.statements} />} /> : <Route
                                path="/profiles/jack" exact
                                render={(props) => <ProfileLarge {...props}
                                    sizes={this.state.sizes}
                                    statements={this.state.statements} />} />}

                        <Route
                            path="/skills" exact
                            render={(props) => <Skills {...props}
                                statements={this.state.statements} />} />

                    </main> : null}
            </Router>
        )
    }
}