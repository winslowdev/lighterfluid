// ======================================== IMPORTS
// ======================================== IMPORTS

// basics
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// functions
import { highlightPunctuation, navigate } from './views/components/Functions';

// components
import { Developers } from './views/Developers'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Profile } from './views/Profile'
import { Projects } from './views/Projects'
import { Skills } from './views/Skills'
import { JohnQ } from './views/JohnQ'

// ======================================== APP
// ======================================== APP

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
                developers: 'Developers & designers',
                home: 'Captain Planet—he\'s our hero. Gonna take pollution down to zero.',
                login: 'Developer login',
                projects: 'Collaborative work',
                skills: 'Stacks, languages & frameworks'
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
                appBlurWidth: Math.round(window.innerWidth * 0.05 + document.getElementById('app-title').offsetWidth + 50)
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
        window.addEventListener("resize", this.determineSizes)
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
                        <h5 className="nav-link" onClick={() => { navigate("internal", "/projects") }}>{highlightPunctuation(this.state.statements.projects)}</h5>
                        <h5 className="nav-link" onClick={() => { navigate("internal", "/developers") }}>{highlightPunctuation(this.state.statements.developers)}</h5>
                        <h5 className="nav-link" onClick={() => { navigate("internal", "/skills") }}>{highlightPunctuation(this.state.statements.skills)}</h5>
                    </div>
                </div> : null}

                <header>
                    <div className="container" id="header">
                        <h6 onClick={() => { navigate("internal", "/") }} id="app-title">Lighterfluid</h6>
                        <div className="nav-icon" onClick={() => { this.toggleNavDrawer() }}>
                            <div className="nav-icon-top"></div>
                            <div className="nav-icon-mid"></div>
                            <div className="nav-icon-btm"></div>
                        </div>
                    </div>
                </header>

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
                        render={(props) => <JohnQ {...props}
                            sizes={this.state.sizes}
                            statements={this.state.statements} />} />

                    <Route
                        path="/developers" exact
                        render={(props) => <Developers {...props}
                            sizes={this.state.sizes}
                            statements={this.state.statements} />} />

                    <Route
                        path="/profiles/winslow-mays" exact
                        render={(props) => <Profile {...props}
                            sizes={this.state.sizes}
                            statements={this.state.statements} />} />

                    <Route
                        path="/skills" exact
                        render={(props) => <Skills {...props}
                            statements={this.state.statements} />} />

                    <Route
                        path="/login" exact
                        render={(props) => <Login {...props}
                            statements={this.state.statements} />} />

                    {/* <footer>
                        <div id="footer" className="container">
                            <p>designed and coded in sf and atl</p>
                            <p className="pseudolink" onClick={() => { navigate('internal', '/login') }}>developer login</p>
                        </div>
                    </footer> */}
                </main>
            </Router>
        )
    }
}