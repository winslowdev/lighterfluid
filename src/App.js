// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// general
import { Home, Home2000 } from './views/Home'
import { Contact } from './views/Contact'
import { Developers } from './views/Developers'
import { Members } from './views/Members'
import { Profile } from './views/Profile'
import { Work } from './views/Work'

// secure
import { Dashboard } from './views/secure/Dashboard'
import { ThisProject } from './views/ThisProject';


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
                genericTile: '',
                headliner: '',
                headlinerFade: '',
                hero: '',
                unimportant: '',
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
                    // bg: '',
                    // backgroundInverted: 'bg-ocean50',
                    // backgroundText: 'background-text',
                    // importantText: 'important-text',
                    // unimportant: 'darkwhite',
                    // passiveTitle: 'text-ocean50',
                }
            })
        } else {
            this.setState({
                theme: {
                    ...this.state.theme,
                    genericTile: 'oceandark-bg',
                    headliner: 'stormywaters',
                    headlinerFade: 'mist',
                    hero: 'oceandark',
                    invertedBg: 'oceandark-bg',
                    unimportant: 'rainclouds',
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
            that.calculateMetrics()
        })
    }

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path="/">

                        {window.innerWidth > 2000 ?
                            <Home2000
                                metrics={this.state.metrics}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                            : <Home
                                metrics={this.state.metrics}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />}
                    </Route>

                    <Route exact path="/developers">
                        <Developers
                            metrics={this.state.metrics}
                            theme={this.state.theme}
                            thisPage={this.state.thisPage} />
                    </Route>

                    <Route exact path="/work">
                        <Work
                            metrics={this.state.metrics}
                            theme={this.state.theme} />
                    </Route>

                    <Route exact path="/work/johnqcitizen">
                        <ThisProject
                            metrics={this.state.metrics}
                            theme={this.state.theme} />
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
                        className={this.state.theme.unimportant}>
                        <p className={`${this.state.theme.unimportant}`}>designed and coded in San Francisco and Atlanta</p>
                    </Link>
                </footer>
            </Router>
        )
    }
}