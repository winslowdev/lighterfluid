import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage.js'
import { Developers }  from './components/Developers.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.navigate = this.navigate.bind(this)
    }

    navigate(type, address) {
        if (type === "external") {
            window.open(address)
        } else if (type === "internal") {
            window.location.href = address
        }
    }

    render() {
        return (
            <Router>
                <Route
                    path="/" exact
                    render={(props) => <Homepage {...props} navigate={this.navigate} />} />

                <Route
                    path="/developers" exact
                    render={(props) => <Developers {...props} navigate={this.navigate} />} />
            </Router>
        )
    }
}