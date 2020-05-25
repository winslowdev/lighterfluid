// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { randomize } from './Functions'
import { Home } from './components/Home'
import { Checkpoint } from './components/Checkpoint'
import { UserProfile } from './components/UserProfile'

// ============================== APPLICATION
// ============================== APPLICATION

export default function App() {
    const [footerText, setFooterText] = useState(null)

    function randomizeFooterMessage() {
        const footerTextOptions = [
            "the best way to organize a space party is to planet",
            "react, star trek, and frosted mini-wheats are all part of a balanced diet",
            "may your reality be your own creation",
            "reality got you down? why not try a conspiracy theory"
        ]

        let randomFooterText = randomize(footerTextOptions)
        setFooterText(randomFooterText)
    }

    useEffect(() => {
        randomizeFooterMessage()
    })

    return (
        <Router>
            <header>
                <Link to="/">
                    <h4>Lighterfluid</h4>
                </Link>
            </header>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/checkpoint">
                    <Checkpoint />
                </Route>

                <Route exact path="/developers/jack">
                    <UserProfile />
                </Route>
            </Switch>

            <footer>
                <Link to="/checkpoint"><h6>{footerText}</h6></Link>
            </footer>
        </Router>
    )
}