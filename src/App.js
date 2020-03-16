import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Developers } from './components/Developers.js'
import { Skills } from './components/Skills.js'
import { Projects } from './components/Projects.js'

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
                projects: 'Collaborations',
                skills: 'Stacks, languages & frameworks'
            },
        }
        this.findDimensions = this.findDimensions.bind(this)
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
                {this.state.isShowNavigation === true ? <div className="navigation-menu">
                    <h5 onClick={() => { { this.navigate("internal", "/") } }}>Home</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/projects") } }}>{this.state.pageTitles.projects}</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/developers") } }}>{this.state.pageTitles.developers}</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/skills") } }}>{this.state.pageTitles.skills}</h5>
                </div>
                    : null}

                <header>
                    <div id="header" className="container">
                        <h6 onClick={() => { { this.navigate("internal", "/") } }}>Lighterfluid</h6>
                        <div className="navigation"
                            onClick={() => { { this.toggleNavbar() } }}>
                            <div className="menu-top"></div>
                            <div className="menu-middle"></div>
                            <div className="menu-bottom"></div>
                        </div>
                    </div>
                </header>


                <Route
                    path="/" exact
                    render={(props) => <Home {...props}
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

                <footer>
                    <div id="footer" className="container">
                        <p className="footer">designed and coded in sf and atl. <span className="sign-in"
                            onClick={() => { { this.navigate('internal', '/signin') } }}>sign in.</span></p>
                    </div>
                </footer>
            </Router>
        )
    }
}