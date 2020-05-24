// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'

// ============================== APPLICATION
// ============================== APPLICATION

export default function App() {
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
            </Switch>
        </Router>
    )
}



// import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// // general
// import { Home } from './views/Home'
// import { Contact } from './views/Contact'
// import { Developers } from './views/Developers'
// import { Members } from './views/Members'
// import { Profile } from './views/Profile'
// import { Work } from './views/Work'

// // secure
// import { Dashboard } from './views/secure/Dashboard'
// import { ThisProject } from './views/ThisProject';


// ============================== COMPLETE APPLICATION

// export default class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             generalSkills: ["AngularJS","Atlas", "Bootstrap", "BCrypt", "CSS3", "Express", "Express Session", "Figma", "Git", "GitHub", "Heroku", "HTML5", "JavaScript", "jQuery", "LESS", "Materialize", "MEAN stack", "MERN stack", "Microsoft Visual Studio Code", "MongoDB", "Mongoose", "Object Oriented Programming", "NERDS stack", "NodeJS", "PostgreSQL", "Postman", "React", "React Native", "RESTful APIs", "Ruby", "Ruby on Rails", "SASS", "Shopify", "Terminal", "Weebly", "Wordpress"],
//             metrics: {
//                 innerWidth: '',
//                 rectangleHeight: '',
//                 squareHeight: '',
//             },
//             theme: {
//                 genericTile: '',
//                 headliner: '',
//                 headlinerFade: '',
//                 hero: '',
//                 unimportant: '',
//             },
//             thisPage: {
//                 title: '',
//                 type: 'home'
//             },
//         }
//         this.adaptTheme = this.adaptTheme.bind(this)
//         this.calculateMetrics = this.calculateMetrics.bind(this)
//     }

//     // DARK OR LIGHT MODE
//     adaptTheme() {
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             this.setState({
//                 theme: {
//                     ...this.state.theme,
//                     // bg: '',
//                     // backgroundInverted: 'bg-ocean50',
//                     // backgroundText: 'background-text',
//                     // importantText: 'important-text',
//                     // unimportant: 'darkwhite',
//                     // passiveTitle: 'text-ocean50',
//                 }
//             })
//         } else {
//             this.setState({
//                 theme: {
//                     ...this.state.theme,
//                     genericTile: 'oceandark-bg',
//                     headliner: 'stormywaters',
//                     headlinerFade: 'mist',
//                     hero: 'oceandark',
//                     invertedBg: 'oceandark-bg',
//                     unimportant: 'rainclouds',
//                 }
//             })
//         }
//     }

//     calculateMetrics() {
//         this.setState({
//             metrics: {
//                 ...this.state.metrics,
//                 innerWidth: window.innerWidth,
//                 rectangleHeight: window.innerWidth < 375 ? window.innerWidth * 0.5 : window.innerWidth * 0.4,
//                 squareHeight: window.innerWidth * 0.5,
//             }
//         })
//     }

//     componentDidMount() {
//         this.calculateMetrics()
//         this.adaptTheme()

//         let that = this
//         setInterval(function () {
//             that.adaptTheme()
//         }, 1000)

//         window.addEventListener("resize", () => {
//             that.calculateMetrics()
//         })
//     }

//     render() {

//         return (
//             <Router>
//                 <header>
//                     <Link to="/"><h1>lighterfluid</h1></Link>
//                 </header>




//                 <Switch>
//                     <Route exact path="/">
//                         <Home
//                             generalSkills={this.state.generalSkills} />
//                     </Route>
//                 </Switch>

//                 <footer>
//                     <Link
//                         to="/members"
//                         className={this.state.theme.unimportant}>
//                         <p className={`${this.state.theme.unimportant}`}>designed and coded in San Francisco and Atlanta</p>
//                     </Link>
//                 </footer>
//             </Router>
//         )
//     }
// }