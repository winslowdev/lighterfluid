// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { highlightPunctuation, randomize } from '../Functions'
import { concepts, humans } from '../Images'


// ============================== HOMEPAGE
// ============================== HOMEPAGE

export function Home() {
    let coral = "#F5154F"
    let driftwoodpurple = "#460096"
    let goldensun = "#ffa800"
    let mojito = "#35b883"
    let skyblue = "#3a85f4"

    const [introduction, setIntroduction] = useState("We turn good concepts into great web apps.")
    const [skillSquareHeight, setSkillSquareHeight] = useState(null)
    const [skillBackgroundColors, setskillBackgroundColors] = useState([coral, driftwoodpurple, goldensun, mojito, skyblue])
    const [skills, setSkills] = useState(["AngularJS", "Atlas", "Bootstrap", "BCrypt", "CSS3", "Express", "Express Session", "Figma", "Git", "GitHub", "Heroku", "HTML5", "JavaScript", "jQuery", "LESS", "Materialize", "MEAN stack", "MERN stack", "Microsoft Visual Studio Code", "MongoDB", "Mongoose", "Object Oriented Programming", "NERDS stack", "NodeJS", "PostgreSQL", "Postman", "React", "React Native", "RESTful APIs", "Ruby", "Ruby on Rails", "SASS", "Shopify", "Terminal", "Weebly", "Wordpress"])

    function determineSkillSquareHeight() {
        setSkillSquareHeight(window.innerWidth / 3)
    }

    useEffect(() => {
        determineSkillSquareHeight()
    })

    return (
        <div className="container">
            <div id="hero" className="margined">
                <h1>{highlightPunctuation(`${introduction}`)}</h1>
            </div>

            <div className="project-spotlight" style={{
                backgroundImage: `url(${concepts.johnQCitizen})`,
                backgroundSize: 'cover',
                backgroundPositionX: '-150px'
            }}>
                <div className="spotlight-cover">
                    <div className="margined">
                        <h4>Latest Project</h4>
                        <h3 className="outline_coral">John Q. Citizen portfolio redesign</h3>

                        <Link to="/">
                            <h6>Check it out.</h6>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="about-us margined">
                <h6>We are two freelance developers who work independently on opposite sides of the US. But occasionally, we make stuff together.</h6>

                <div className="dynamic-duo">
                    <div className="link-bundle">
                        <img src={humans.man1} alt="~" />
                        <h5>Winslow Mays</h5>
                    </div>

                    <div className="link-bundle">
                        <img src={humans.man2} alt="~" />
                        <h5>Ross Davidson</h5>
                    </div>
                </div>
            </div>

            <div className="skillgrid">
                {skills.map((skill, _key) => {
                    return (
                        <div key={_key} className="skillblock" style={{
                            backgroundColor: `${randomize(skillBackgroundColors)}`,
                            height: `${skillSquareHeight}` + 'px',
                            width: `${skillSquareHeight}` + 'px',
                        }}>
                            <h6>{skill}</h6>
                        </div>
                    )
                })}
            </div>

            <div className="for-hire">
                <div class="hire-information margined">
                    <h4>{highlightPunctuation("Let's work together.")}</h4>

                    <p>Whether you wanna rework an existing project or code something from the root up, we can help find the right solution for you.</p>
                    <Link to="/">
                        <button class="on-oceandark">Send us an email</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}