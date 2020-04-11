// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// general
import { Home } from './views/Home'
import { Contact } from './views/Contact'
import { Developers } from './views/Developers'
import { Members } from './views/Members'
import { Profile } from './views/Profile'

// secure
import { Dashboard } from './views/secure/Dashboard'


// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            metrics: {
                innerWidth: '',
                rectangleHeight: '',
                squareHeight: '',
            },
            theme: {
                background: '',
                backgroundInverted: '',
                backgroundText: '',
                importantText: '',
                noteworthy: '',
                passiveText: '',
                passiveTitle: '',
                tileText: ''
            },
            thisPage: {
                title: '',
                type: 'home'
            },
        }
        this.adaptTheme = this.adaptTheme.bind(this)
        this.calculateMetrics = this.calculateMetrics.bind(this)
    }

    // DARK OR LIGHT MODE
    adaptTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setState({
                theme: {
                    ...this.state.theme,
                    backgroundInverted: 'bg-ocean50',
                    backgroundText: 'background-text',
                    importantText: 'important-text',
                    passiveText: 'text-basegrey',
                    passiveTitle: 'text-ocean50',
                    tileText: 'text-white'
                }
            })
        } else {
            this.setState({
                theme: {
                    ...this.state.theme,
                    backgroundInverted: 'bg-ocean',
                    backgroundText: 'background-text',
                    importantText: 'important-text',
                    noteworthy: 'noteworthy-text',
                    passiveText: 'text-ocean50',
                    passiveTitle: 'text-ocean93',
                    tileText: 'text-basegrey'
                }
            })
        }
    }

    calculateMetrics() {
        this.setState({
            metrics: {
                ...this.state.metrics,
                innerWidth: window.innerWidth,
                rectangleHeight: window.innerWidth < 375 ? window.innerWidth * 0.5 : window.innerWidth * 0.4,
                squareHeight: window.innerWidth * 0.5,
            }
        })
    }

    componentDidMount() {
        this.calculateMetrics()
        this.adaptTheme()

        let that = this
        setInterval(function () {
            that.adaptTheme()
        }, 1000)

        window.addEventListener("resize", () => {
            this.calculateMetrics()
        })
    }

    render() {

        return (
            <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home
                                metrics={this.state.metrics}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/developers">
                            <Developers
                                metrics={this.state.metrics}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/developers/jack">
                            <Profile
                                metrics={this.state.metrics}
                                theme={this.state.theme} />
                        </Route>

                        <Route exact path="/members">
                            <Members theme={this.state.theme} />
                        </Route>

                        <Route exact path="/contact">
                            <Contact theme={this.state.theme} />
                        </Route>

                        <Route exact path="/members/dashboard">
                            <Dashboard
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>
                    </Switch>

                <footer>
                    <Link
                        to="/members"
                        className={this.state.theme.passiveText}>
                        <p>designed and coded in San Francisco and Atlanta</p>
                    </Link>
                </footer>
            </Router>
        )
    }
}