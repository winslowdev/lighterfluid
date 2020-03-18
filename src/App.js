import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Developers } from './components/Developers.js'
import { Skills } from './components/Skills.js'
import { Projects } from './components/Projects.js'
import { Login } from './components/users/Login.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNavigation: false,
            dimensions: {
                rectangleHeight: '',
                squareHeight: ''
            },
            welcome: {
                developers: 'Developers & designers',
                home: 'Captain Planet—he\'s our hero. Gonna take pollution down to zero.',
                login: 'Developer login',
                projects: 'Collaborations',
                skills: 'Stacks, languages & frameworks'
            },
        }
        this.findDimensions = this.findDimensions.bind(this)
        this.highlightPunctuation = this.highlightPunctuation.bind(this)
        this.navigate = this.navigate.bind(this)
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    findDimensions() {
        this.setState({
            dimensions: {
                ...this.state.dimensions,
                rectangleHeight: window.innerWidth * 0.4,
                squareHeight: window.innerWidth * 0.5
            }
        })
    }

    highlightPunctuation(phrase) {
        const phraseSplit = phrase.split('')
        const highlightedPhrase = []
        let i;

        for (i = 0; i < phrase.length; i++) {
            if (!phraseSplit[i].match(/[!@#$%`~^&*(|)?/"'>.<,_—]/g)) {
                highlightedPhrase.push(phraseSplit[i])
            } else {
                highlightedPhrase.push(<span className="punc">{phraseSplit[i]}</span>)
            }
        }

        highlightedPhrase.join('')
        return highlightedPhrase
    }

    navigate(type, address) {
        if (type === "external") {
            window.open(address)
        } else if (type === "internal") {
            window.location.href = address
        }
    }

    toggleNavbar() {
        this.setState({
            isShowNavigation: !this.state.isShowNavigation
        })
    }

    componentDidMount() {
        this.findDimensions()
        window.addEventListener("resize", this.findDimensions)
    }

    render() {
        return (
            <Router>
                {this.state.isShowNavigation === true ? <div className="nav-on">
                    <div className="bg-blur" onClick={() => { this.toggleNavbar() }}></div>
                    <div className="nav-drawer">
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/projects") }}>{this.highlightPunctuation(this.state.welcome.projects)}</h5>
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/developers") }}>{this.highlightPunctuation(this.state.welcome.developers)}</h5>
                        <h5 className="nav-link" onClick={() => { this.navigate("internal", "/skills") }}>{this.highlightPunctuation(this.state.welcome.skills)}</h5>
                    </div>
                </div> : null}

                <header>
                    <div id="header" className="container">
                        <h6 onClick={() => { this.navigate("internal", "/") }}>Lighterfluid</h6>
                        <div className="nav-icon" onClick={() => { this.toggleNavbar() }}>
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
                            highlightPunctuation={this.highlightPunctuation}
                            navigate={this.navigate}
                            dimensions={this.state.dimensions}
                            welcome={this.state.welcome}
                        />} />

                    <Route
                        path="/projects" exact
                        render={(props) => <Projects {...props}
                            dimensions={this.state.dimensions}
                            highlightPunctuation={this.highlightPunctuation}
                            navigate={this.navigate}
                            welcome={this.state.welcome} />} />

                    <Route
                        path="/developers" exact
                        render={(props) => <Developers {...props}
                            highlightPunctuation={this.highlightPunctuation}
                            navigate={this.navigate}
                            welcome={this.state.welcome} />} />

                    <Route
                        path="/skills" exact
                        render={(props) => <Skills {...props}
                            highlightPunctuation={this.highlightPunctuation}
                            navigate={this.navigate}
                            welcome={this.state.welcome} />} />

                    <Route
                        path="/login" exact
                        render={(props) => <Login {...props}
                            highlightPunctuation={this.highlightPunctuation}
                            navigate={this.navigate}
                            welcome={this.state.welcome} />} />

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