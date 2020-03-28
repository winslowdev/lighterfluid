// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { highlightPunctuation, navigate } from './universals/Functions';

import { Developers } from './views/Developers'
import { Home } from './views/Home'
import { Profile, ProfileLarge } from './views/Profile'
import { ProjectItem } from './views/ProjectItem'
import { Projects } from './views/Projects'
import { Skills } from './views/Skills'


// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                projects: ['Collaborative', <br />,  'projects'],
                skills: ['Skills &', <br />, 'competencies']
            },
        }
        this.determineSizes = this.determineSizes.bind(this)
        this.toggleNavDrawer = this.toggleNavDrawer.bind(this)
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

        window.addEventListener("resize", () => {
            this.determineSizes()
        })
    }

    render() {
        return (
            <Router>
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
                    <h6 onClick={() => { navigate("/") }} id="app-title">Lighterfluid</h6>

                    { <Route path="/" exact /> ? <div className="nav-icon" onClick={() => { this.toggleNavDrawer() }}>
                            <div className="nav-icon-top"></div>
                            <div className="nav-icon-mid"></div>
                            <div className="nav-icon-btm"></div>
                        </div> : null }
                </header> : null}

                {window.innerWidth >= 1000 ? <header>
                    <div className="container" id="header">
                        <h6 onClick={() => { navigate("/") }} id="app-title" className="anchorspoof">Lighterfluid</h6>

                        <nav>
                            <p className="nav-link anchorspoof">{this.state.statements.developers}</p>
                            <p className="nav-link anchorspoof">{this.state.statements.projects}</p>
                            <p className="nav-link anchorspoof">{this.state.statements.skills}</p>
                        </nav>
                    </div>
                </header> : null}



                {/* <header>
                    <div className="container" id="header">
                        <h6 onClick={() => { navigate("/") }} id="app-title">Lighterfluid</h6>
                        <div className="nav-icon" onClick={() => { this.toggleNavDrawer() }}>
                            <div className="nav-icon-top"></div>
                            <div className="nav-icon-mid"></div>
                            <div className="nav-icon-btm"></div>
                        </div>
                    </div>
                </header> */}

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

                    { window.innerWidth < 2000 ? <Route
                        path="/profiles/jack" exact
                        render={(props) => <Profile {...props}
                            sizes={this.state.sizes}
                            statements={this.state.statements} />} /> : <Route
                            path="/profiles/jack" exact
                            render={(props) => <ProfileLarge {...props}
                                sizes={this.state.sizes}
                    statements={this.state.statements} />} /> }

                    <Route
                        path="/skills" exact
                        render={(props) => <Skills {...props}
                            statements={this.state.statements} />} />

                </main>
            </Router>
        )
    }
}