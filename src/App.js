// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// general
import { Home } from './views/Home'
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
                    background: 'bg-ocean',
                    backgroundInverted: 'bg-ocean50',
                    importantText: 'text-ocean7',
                    passiveText: 'text-basegrey',
                    passiveTitle: 'text-ocean50',
                    tileText: 'text-white'
                }
            })
        } else {
            this.setState({
                theme: {
                    ...this.state.theme,
                    background: 'bg-basegrey',
                    backgroundInverted: 'bg-ocean',
                    backgroundText: 'text-ocean93',
                    importantText: 'text-ocean',
                    passiveText: 'text-ocean50',
                    passiveTitle: 'text-ocean7',
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
        const theme = this.state.theme
        const thisPage = this.state.thisPage

        return (
            <Router>
                <header>
                    <h1>Lighterfluid</h1>
                </header>

                <main>
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

                        <Route exact path="/profiles/jack">
                            <Profile
                                metrics={this.state.metrics}
                                theme={theme} />
                        </Route>

                        <Route exact path="/members">
                            <Members theme={this.state.theme} />
                        </Route>

                        <Route exact path="/members/dashboard">
                            <Dashboard
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>
                    </Switch>
                </main>

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