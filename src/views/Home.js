// // ============================== IMPORTS

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import { Hero, SquareTile } from '../universals/Snacks'
// import { highlightPunctuation } from '../universals/Functions'
// import { stock } from '../universals/Images'

// export class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             metrics: {
//                 rectangleLength: '',
//                 squareLength: ''
//             }
//         }
//         this.determineSkillBackground = this.determineSkillBackground.bind(this)
//         this.determineMetrics = this.determineMetrics.bind(this)
//     }

//     determineSkillBackground(index) {
//         const backgrounds = ["bluer", "golder", "greener", "pinker", "purpler"]

//         return backgrounds[Math.floor(Math.random() * Math.ceil(backgrounds.length))]
//     }

//     determineMetrics() {
//         this.setState({
//             metrics: {
//                 ...this.state.metrics,
//                 rectangleLength: [window.innerWidth / 3 * 2],
//                 squareLength: [window.innerWidth / 3]
//             }
//         })
//     }

//     componentDidMount() {
//         this.determineMetrics()
//         this.determineSkillBackground()

//         let that = this
//         window.addEventListener('resize', () => {
//             that.determineMetrics()
//         })
//     }

//     componentWillUnmount() {
//         this.determineSkillBackground()
//     }


//     render() {
//         return (
//             <React.Fragment>

//                 {/* PITCH */}
//                 <div id="hero">
//                     <h3>{highlightPunctuation("We turn good concepts into great web apps.")}</h3>
//                 </div>

//                 {/* PROJECT SPOTLIGHT */}
//                 <div id="home-projects">
//                     <div className="home-projects-cover">
//                         <h5>Latest Project</h5>
//                         <h2>John Q. Citizen<br />portfolio redesign</h2>
//                         <button>Read</button>
//                     </div>
//                 </div>

//                 {/* DEVELOPER LINKS */}
//                 <div id="home-developers">
//                     <h4>We're freelance developers located around the US. From sea to shining C#.</h4>

//                     <div className="home-dev">
//                         <Link to="/winslow-mays"><div className="home-dev-info">
//                             <img src={stock.gazingMan} alt="human left" />
//                             <h2>Winslow <br />Mays</h2>
//                         </div></Link>

//                         <Link to="/ross-davidson"><div className="home-dev-info">
//                             <img src={stock.hopeMan} alt="human right" />
//                             <h2>Ross <br />Davidson</h2>
//                         </div></Link>
//                     </div>
//                 </div>

//                 {/* SKILLS */}
//                 <div id="home-skills">
//                     <div className="home-ski-title"
//                         style={{
//                             backgroundColor: 'var(--oceandark)',
//                             height: this.state.metrics.squareLength + 'px',
//                             width: this.state.metrics.rectangleLength + 'px'
//                         }}><h2>{highlightPunctuation("Talk nerdy to us.")}</h2></div>

//                     {this.props.generalSkills.map((skill, index) => {
//                         return (
//                             <div className={`skill-square ${this.determineSkillBackground()}`}
//                                 key={index}
//                                 style={{
//                                     width: this.state.metrics.squareLength + 'px',
//                                     height: this.state.metrics.squareLength + 'px'
//                                 }}>
//                                 <p>{skill}</p>
//                             </div>
//                         )
//                     })}
//                 </div>

//                 <div id="home-contact">
//                     <div className="home-con-column">
//                         <h2>{highlightPunctuation("Let's work together.")}</h2>
//                         <p>Whether you’re looking to rework an existing project or code a new one from the root up, let's work together to find you the right solution.</p>
//                     </div>

//                     <div className="home-con-column">
//                         <p>Before reaching out, think about anything you'd like me to know for the project — key points, budget, deadline, photos of your cat.</p>
//                         <p className="second-par">Even if you're not sure if the information is relevant, it probably won't hurt to mention it. Just throw it out there like a basketball into the Grand Canyon.</p>
//                     </div>

//                     <div className="home-con-column">
//                         <p>If you're ready, click the button below or just email me directly at <span className="email-link">hello@lighterfluid.co</span>. You can expect a response from a real human (that's me) within 24 hours.</p>

//                         <button className="accentpink-bg">Email us</button>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }