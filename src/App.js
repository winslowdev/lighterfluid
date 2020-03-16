import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Developers } from './components/Developers.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNavigation: false
        }
        this.navigate = this.navigate.bind(this)
        this.toggleNavbar = this.toggleNavbar.bind(this)
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

    render() {
        return (
            <Router>
                {this.state.isShowNavigation === true ? <div className="navigation-menu">
                    <h5 onClick={() => { { this.navigate("internal", "/") } }}>Home</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/projects") } }}>Collaborative projects</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/developers") } }}>Developers</h5>
                    <h5 onClick={() => { { this.navigate("internal", "/skills") } }}>Stacks, languages & frameworks</h5>
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
                    />} />

                <Route
                    path="/developers" exact
                    render={(props) => <Developers {...props} navigate={this.navigate} />} />
            </Router>
        )
    }
}