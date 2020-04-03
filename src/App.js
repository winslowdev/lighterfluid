// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Home } from './views/Home'
import { Developers } from './views/Developers'
import { Members } from './views/Members';

import { Dashboard } from './views/secure/Dashboard'



// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sizes: {
                currentWidth: '',
                rectangleHeight: '',
                square: '',
            },
            style: {
                background: '',
                importantText: '',
                passiveText: '',
                passiveTitle: '',
                tileText: ''
            },
            thisPage: {
                intro: ['We turn good concepts', <br />, 'into badass web apps.'],
                title: '',
                type: 'home'
            },
        }
        this.determineSizes = this.determineSizes.bind(this)
        this.provideInformation = this.provideInformation.bind(this)
        this.renderStyle = this.renderStyle.bind(this)
        // this.runClock = this.runClock.bind(this)
    }

    determineSizes() {
        this.setState({
            sizes: {
                ...this.state.sizes,
                currentWidth: window.innerWidth,
                rectangleHeight: window.innerWidth * 0.4,
                square: window.innerWidth * 0.5,
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

    // CHANGE STYLE BASED ON DARK OR LIGHT MODE
    renderStyle() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setState({
                style: {
                    ...this.state.style,
                    background: 'bg-deepocean',
                    importantText: 'text-deepocean7',
                    passiveText: 'text-basegrey',
                    passiveTitle: 'text-deepocean50',
                    tileText: 'text-white'
                }
            })
        } else {
            this.setState({
                style: {
                    ...this.state.style,
                    background: 'bg-basegrey',
                    importantText: 'text-deepocean',
                    passiveText: 'text-deepocean50',
                    passiveTitle: 'text-deepocean7',
                    tileText: 'text-white'
                }
            })
        }
    }

    componentDidMount() {
        this.determineSizes()
        this.renderStyle()

        let that = this
        setInterval(function () {
            that.renderStyle()
        }, 1000)

        window.addEventListener("resize", () => {
            this.determineSizes()
        })
    }

    render() {
        return (
            <Router>
                <div className={`app ${this.state.style.background}`} style={{ height: '100vh' }}>

                    <header>
                        <h1
                            className={this.state.thisPage.pageType === "home" ? this.state.style.passiveText : this.state.style.passiveTitle}>Lighterfluid</h1>



                        {this.state.thisPage.pageType !== "home" ? <div className="page-info">
                            <h3 className={this.state.style.importantText}>{this.state.thisPage.title}</h3>
                        </div> : null}
                    </header>

                    <Switch>

                        <Route exact path="/">
                            <Home
                                provideInformation={this.provideInformation}
                                sizes={this.state.sizes}
                                style={this.state.style}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/developers">
                            <Developers
                                provideInformation={this.provideInformation}
                                sizes={this.state.sizes}
                                style={this.state.style}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/members">
                            <Members style={this.state.style} thisPage={this.state.thisPage} provideInformation={this.provideInformation} />
                        </Route>

                        <Route exact path="/members/dashboard">
                            <Dashboard
                                provideInformation={this.provideInformation}
                                style={this.state.style}
                                thisPage={this.state.thisPage} />
                        </Route>
                    </Switch>

                    <footer>
                        <Link
                            to="/members"
                            onClick={() => { this.provideInformation("members") }}
                            className={this.state.style.passiveText}>
                            <p>designed and coded in San Francisco and Atlanta</p>
                        </Link>
                    </footer>
                </div>
            </Router>
        )
    }
}