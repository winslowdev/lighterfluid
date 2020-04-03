// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Home } from './views/Home'
import { Developers } from './views/Developers'
import { Members } from './views/Members';



// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: {
                date: '',
                time: ''
            },
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
        this.formatDate = this.formatDate.bind(this)
        this.formatHour = this.formatHour.bind(this)
        this.renderMessages = this.renderMessages.bind(this)
        this.renderStyle = this.renderStyle.bind(this)
        this.setCurrent = this.setCurrent.bind(this)
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

    formatDate(day, month, date, year) {
        if (this.state.isMinus800 === true) {
            return day.slice(0, 3) + ', ' + month.slice(0, 3) + ' ' + date
        } else {
            return day + ', ' + month + ' ' + date
        }
    }

    formatHour(hour) {
        if (hour === 0) {
            return 12
        } else if (hour > 12) {
            return hour - 12
        } else {
            return hour
        }
    }

    renderMessages(pageType) {
        if (pageType === "contact") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['Call us, beep us, if you wanna reach us.', <br />, 'But if you wanna page us, that\'s not okay.'],
                    title: 'Contact',
                    type: pageType
                }
            })
        } else if (pageType === "developers") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['We\'re freelance developers located throughout the United States—from sea to shining C#.'],
                    title: ['Developers &', <br />, 'designers'],
                    type: pageType
                }
            })
        } else if (pageType === "home") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['We turn good concepts', <br />, 'into badass web apps.'],
                    type: pageType
                }
            })
        } else if (pageType === "members") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: '',
                    title: ['Welcome to', <br />, 'the secret lair.'],
                    type: pageType
                }
            })
        } else if (pageType === "projects") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['We\'re freelance developers located throughout the United States—from sea to shining C#.'],
                    title: 'Collaborative projects',
                    type: pageType
                }
            })
        } else if (pageType === "services") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['Whether you need a need a basic website or a web app that renders data from multiple third-party APIs, we gotchu'],
                    title: 'How we can help',
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

    // TIME AND DATE
    setCurrent() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const clock = new Date();

        let day = week[clock.getDay()]
        let month = months[clock.getMonth()]
        let date = clock.getDate()
        let year = clock.getFullYear()

        let hour = clock.getHours()
        let minute = (clock.getMinutes() >= 10) ? clock.getMinutes() : '0' + clock.getMinutes();
        let period = (hour >= 12) ? 'PM' : 'AM';

        let rightNow = this.formatHour(hour) + ':' + minute + ' ' + period

        this.renderStyle()

        this.setState({
            current: {
                ...this.state.current,
                date: this.formatDate(day, month, date, year),
                time: rightNow
            }
        })
        console.log(this.state.current.date)
    }

    componentDidMount() {
        this.determineSizes()
        this.renderStyle("home")
        this.setCurrent()

        let that = this
        setInterval(function () {
            that.setCurrent()
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
                                renderMessages={this.renderMessages}
                                sizes={this.state.sizes}
                                style={this.state.style}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/developers">
                            <Developers
                                renderMessages={this.renderMessages}
                                sizes={this.state.sizes}
                                style={this.state.style}
                                thisPage={this.state.thisPage} />
                        </Route>

                        <Route exact path="/members">
                            <Members style={this.state.style} thisPage={this.state.thisPage} />
                        </Route>
                    </Switch>

                    <footer>
                        <Link
                            to="/members"
                            onClick={() => { this.renderMessages("members") }}
                            className={this.state.style.passiveText}>
                            <p>designed and coded in San Francisco and Atlanta</p>
                        </Link>
                    </footer>
                </div>
            </Router>
        )
    }
}