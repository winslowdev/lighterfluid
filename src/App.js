// ======================================== IMPORTS
// ======================================== IMPORTS

// basics
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// snacks
import { highlightPunctuation } from './components/snacks/functions';

// components
import { Developers } from './components/Developers.js'
import { Home } from './components/Home.js'
import { Login } from './components/users/Login.js'
import { Projects } from './components/Projects.js'
import { Skills } from './components/Skills.js'


// ======================================== APP
// ======================================== APP

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNavDrawer: false,
            sizes: {
                rectangleHeight: '',
                squareHeight: ''
            },
            statements: {
                developers: 'Developers & designers',
                home: 'Captain Planet—he\'s our hero. Gonna take pollution down to zero.',
                login: 'Developer login',
                projects: 'Collaborations',
                skills: 'Stacks, languages & frameworks'
            },
        }
        this.determineSizes = this.determineSizes.bind(this)
        this.navigate = this.navigate.bind(this)
        this.toggleNavDrawer = this.toggleNavDrawer.bind(this)
    }

    determineSizes() {
        this.setState({
            sizes: {
                ...this.state.sizes,
                rectangleHeight: window.innerWidth * 0.4,
                squareHeight: window.innerWidth * 0.5
            }
        })
    }

    navigate(type, address) {
        if (type === "external") {
            window.open(address)
        } else if (type === "internal") {
            window.location.href = address
        }
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
                    <div className="bg-blur" onClick={() => { this.toggleNavDrawer() }}></div>
                    <div className="nav-drawer">
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/projects") }}>{highlightPunctuation(this.state.statements.projects)}</h5>
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/developers") }}>{highlightPunctuation(this.state.statements.developers)}</h5>
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/skills") }}>{highlightPunctuation(this.state.statements.skills)}</h5>
                    </div>
                </div> : null}

                <header>
                    <div id="header" className="container">
                        <h6 onClick={() => { this.navigate("internal", "/") }}>Lighterfluid</h6>
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
                            highlightPunctuation={highlightPunctuation}
                            navigate={this.navigate}
                            sizes={this.state.sizes}
                            statements={this.state.statements}
                        />} />

                    <Route
                        path="/projects" exact
                        render={(props) => <Projects {...props}
                            sizes={this.state.sizes}
                            highlightPunctuation={highlightPunctuation}
                            navigate={this.navigate}
                            statements={this.state.statements} />} />

                    <Route
                        path="/developers" exact
                        render={(props) => <Developers {...props}
                            highlightPunctuation={highlightPunctuation}
                            navigate={this.navigate}
                            statements={this.state.statements} />} />

                    <Route
                        path="/skills" exact
                        render={(props) => <Skills {...props}
                            highlightPunctuation={highlightPunctuation}
                            navigate={this.navigate}
                            statements={this.state.statements} />} />

                    <Route
                        path="/login" exact
                        render={(props) => <Login {...props}
                            highlightPunctuation={highlightPunctuation}
                            navigate={this.navigate}
                            statements={this.state.statements} />} />

                    <footer>
                        <div id="footer" className="container">
                            <p>designed and coded in sf and atl</p>
                            <p className="pseudolink" onClick={() => { this.navigate('internal', '/login') }}>developer login</p>
                        </div>
                    </footer>
                </main>
            </Router>
        )
    }
}