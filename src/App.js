// ============================== IMPORTS

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { highlightPunctuation, navigate } from './universals/Functions';
import { stock } from './universals/Images';

import { Home } from './views/Home'
import { Developers } from './views/Developers'



// ============================== COMPLETE APPLICATION

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHoverState: '',
            introStatement: '',
            isShowNavDrawer: false,
            thisPage: {
                intro: ['We turn good concepts', <br />, 'into badass web apps.'],
                name: 'home',
                title: '',
                titleColor: 'text-deepocean50',
            },
            sizes: {
                currentWidth: '',
                rectangleHeight: '',
                squareHeight: '',
                appBlurWidth: ''
            }
        }
        this.determineSizes = this.determineSizes.bind(this)
        this.renderStyling = this.renderStyling.bind(this)
        this.setThisPage = this.setThisPage.bind(this)
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

    renderStyling(name) {
        if (name === "home") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['We turn good concepts', <br />, 'into badass web apps.'],
                    titleColor: 'text-deepocean50'
                }
            })
        } else if (name === "developers") {
            this.setState({
                thisPage: {
                    ...this.state.thisPage,
                    intro: ['We\'re freelance developers located throughout the United States—from sea to shining C#.'],
                    title: 'Developers & designers',
                    titleColor: 'text-deepocean7'
                }
            })
        }
    }

    setThisPage(pageName) {
        this.setState({
            thisPage: {
                ...this.state.thisPage,
                name: pageName
            }
        })

        this.renderStyling(name)
    }

    componentDidMount() {
        this.determineSizes()

        window.addEventListener("resize", () => {
            this.determineSizes()
        })
    }

    render() {
        return (
            <Router>

                <header>
                    <h1 className={this.state.thisPage.titleColor}>Lighterfluid</h1>

                    {this.state.thisPage.name !== "home" ? <div className="page-info">
                        <h3>{this.state.thisPage.title}</h3>
                    </div> : null}
                </header>

                <Route path="/" exact render={(props) => <Home
                    setThisPage={this.setThisPage}
                    sizes={this.state.sizes}
                    thisPage={this.state.thisPage}
                />} />

                <Route path="/developers" exact render={(props) => <Developers
                    sizes={this.state.sizes}
                />} />

                <footer>
                    <p>designed and coded in San Francisco and Atlanta</p>
                </footer>

            </Router>
        )
    }
}