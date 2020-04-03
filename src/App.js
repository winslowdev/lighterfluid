// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// general
import { Home } from './views/Home'
import { Developers } from './views/Developers'
import { Members } from './views/Members';

// secure
import { Dashboard } from './views/secure/Dashboard'


// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dimensions: {
                innerWidth: '',
                rectangleHeight: '',
                squareHeight: '',
            },
            theme: {
                background: '',
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
        this.calculateDimensions = this.calculateDimensions.bind(this)
        this.provideInformation = this.provideInformation.bind(this)
    }

    // DARK OR LIGHT MODE
    adaptTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setState({
                theme: {
                    ...this.state.theme,
                    background: 'bg-deepocean',
                    importantText: 'text-deepocean7',
                    passiveText: 'text-basegrey',
                    passiveTitle: 'text-deepocean50',
                    tileText: 'text-white'
                }
            })
        } else {
            this.setState({
                theme: {
                    ...this.state.theme,
                    background: 'bg-basegrey',
                    importantText: 'text-deepocean',
                    passiveText: 'text-deepocean50',
                    passiveTitle: 'text-deepocean7',
                    tileText: 'text-white'
                }
            })
        }
    }

    calculateDimensions() {
        this.setState({
            dimensions: {
                ...this.state.dimensions,
                innerWidth: window.innerWidth,
                rectangleHeight: window.innerWidth * 0.4,
                squareHeight: window.innerWidth * 0.5,
            }
        })
    }

    // PROVIDE PAGE INFORMATION
    provideInformation(pageType) {
        switch (pageType) {
            case "contact":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        intro: ['Call us, beep us, if you wanna reach us.', <br />, 'But if you wanna page us, that\'s not okay.'],
                        title: 'Contact',
                        type: pageType
                    }
                })
                break;
            case "dashboard":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        title: 'What\'s up?',
                        type: pageType
                    }
                })
                break;
            case "developers":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        title: ['Developers &', <br />, 'designers'],
                        type: pageType
                    }
                })
                break;
                break;
            case "members":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        intro: '',
                        title: ['Welcome to', <br />, 'the secret lair.'],
                        type: pageType
                    }
                })
                break;
            case "projects":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        intro: ['We\'re freelance developers located throughout the United States—from sea to shining C#.'],
                        title: 'Collaborative projects',
                        type: pageType
                    }
                })
                break;
            case "services":
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        intro: ['Whether you need a need a basic website or a web app that renders data from multiple third-party APIs, we gotchu'],
                        title: 'How we can help',
                        type: pageType
                    }
                })
                break;
            default:
                this.setState({
                    thisPage: {
                        ...this.state.thisPage,
                        intro: ['We turn good concepts', <br />, 'into badass web apps.'],
                        type: pageType
                    }
                })
        }
    }



    componentDidMount() {
        this.calculateDimensions()
        this.adaptTheme()

        let that = this
        setInterval(function () {
            that.adaptTheme()
        }, 1000)

        window.addEventListener("resize", () => {
            this.calculateDimensions()
        })
    }

    render() {
        const theme = this.state.theme
        const thisPage = this.state.thisPage

        return (
            <Router>
                <div className={`app ${theme.background}`} theme={{ height: '100vh' }}>

                    <header>
                        <h1
                            className={thisPage.pageType === "home" ? theme.passiveText : theme.passiveTitle}>Lighterfluid</h1>

                        {thisPage.pageType !== "home" ? <div className="page-info">
                            <h3 className={theme.importantText}>{thisPage.title}</h3>
                        </div> : null}
                    </header>

                    <Switch>

                        <Route exact path="/">
                            <Home
                                dimensions={this.state.dimensions}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/developers">
                            <Developers
                                provideInformation={this.provideInformation}
                                dimensions={this.state.dimensions}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/members">
                            <Members theme={this.state.theme} thisPage={this.state.thisPage} provideInformation={this.provideInformation} />
                        </Route>

                        <Route exact path="/members/dashboard">
                            <Dashboard
                                provideInformation={this.provideInformation}
                                theme={this.state.theme}
                                thisPage={this.state.thisPage} />
                        </Route>
                    </Switch>

                    <footer>
                        <Link
                            to="/members"
                            onClick={() => { this.provideInformation("members") }}
                            className={this.state.theme.passiveText}>
                            <p>designed and coded in San Francisco and Atlanta</p>
                        </Link>
                    </footer>
                </div>
            </Router>
        )
    }
}