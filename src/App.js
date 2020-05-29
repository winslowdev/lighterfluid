// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


import { Home } from './components/Home'
import { Checkpoint } from './components/Checkpoint'
import { Profile } from './components/Profile'

import { randomize } from './supplements/Functions'
import { Dashboard } from './components/Dashboard'
import { Project } from './components/Project'


// ============================== APPLICATION
// ============================== APPLICATION

export default function App() {
    const [footerText, setFooterText] = useState(null)

    function randomizeFooterMessage() {
        const footerTextOptions = [
            "the best way to organize a space party is to planet",
            "react, star trek, and frosted mini-wheats are all part of a balanced diet",
            "reality got you down? why not try a conspiracy theory"
        ]

        let randomFooterText = randomize(footerTextOptions)
        setFooterText(randomFooterText)
    }

    useEffect(() => {
        randomizeFooterMessage()
    }, [])

    return (
        <Router>
            <header>
                <div id="header_navigation" className="margined">
                    <Link to="/">
                        <h4>Lighterfluid</h4>
                    </Link>

                    <div id="navicon">
                        <div className="navicon-top"></div>
                        <div className="navicon-middle"></div>
                        <div className="navicon-bottom"></div>
                    </div>
                </div>
            </header>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/checkpoint">
                    <Checkpoint />
                </Route>

                <Route exact path="/developers/jack">
                    <Profile />
                </Route>

                <Route exact path="/projects/xxx">
                    <Project />
                </Route>

                <Route exact path="/secure/home">
                    <Dashboard />
                </Route>
            </Switch>

            <footer>
                <Link to="/checkpoint"><h6>{footerText}</h6></Link>
            </footer>
        </Router>
    )
}