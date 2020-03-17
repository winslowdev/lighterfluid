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
            pageTitles: {
                developers: 'Developers & designers',
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
        const splitPhrase = phrase.split('')
        let i;

        for (i = 0; i < splitPhrase.length; i++) {
            if (splitPhrase[i].match(/[.,\'/#!$%\^&\*;:{}=\-—_`~()]/g)) {
                splitPhrase[i].replace(splitPhrase[i], <span classname="punctuation">${splitPhrase[i]}</span>)
            }
        }
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
                        <div className="bg-blur"></div>
                        <div className="nav-drawer" onMouseLeave={() => { { this.toggleNavbar() } }}>
                            <h5 className="nav-link" onClick={() => { { this.navigate("internal", "/projects") } }}>{this.state.pageTitles.projects}</h5>
                            <h5 className="nav-link" onClick={() => { { this.navigate("internal", "/developers") } }}>{this.state.pageTitles.developers}</h5>
                            <h5 className="nav-link" onClick={() => { { this.navigate("internal", "/skills") } }}>{this.state.pageTitles.skills}</h5>
                        </div>
                    </div> : null}

                <header>
                    <div id="header" className="container">
                        <h6 onClick={() => { { this.navigate("internal", "/") } }}>Lighterfluid</h6>
                        <div className="nav-icon"
                            onClick={() => { { this.toggleNavbar() } }}>
                            <div className="nav-icon-top"></div>
                            <div className="nav-icon-mid"></div>
                            <div className="nav-icon-btm"></div>
                        </div>
                    </div>
                </header>

                <Route
                    path="/" exact
                    render={(props) => <Home {...props}
                        heroHighlight={this.state.heroHighlight}
                        highlightPunctuation={this.highlightPunctuation}
                        navigate={this.navigate}
                        dimensions={this.state.dimensions}
                        pageTitles={this.state.pageTitles}
                    />} />

                <Route
                    path="/projects" exact
                    render={(props) => <Projects {...props}
                        dimensions={this.state.dimensions}
                        navigate={this.navigate}
                        pageTitles={this.state.pageTitles} />} />

                <Route
                    path="/developers" exact
                    render={(props) => <Developers {...props}
                        navigate={this.navigate}
                        pageTitles={this.state.pageTitles} />} />

                <Route
                    path="/skills" exact
                    render={(props) => <Skills {...props}
                        navigate={this.navigate}
                        pageTitles={this.state.pageTitles} />} />

                <Route
                    path="/login" exact
                    render={(props) => <Login {...props}
                        navigate={this.navigate}
                        pageTitles={this.state.pageTitles} />} />

                <footer>
                    <div id="footer" className="container">
                        <p>designed and coded in sf and atl</p>
                        <p className="pseudolink" onClick={() => { { this.navigate('internal', '/login') } }}>developer login</p>
                    </div>
                </footer>
            </Router>
        )
    }
}