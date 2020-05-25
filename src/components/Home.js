// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { IoMdArrowForward } from 'react-icons/io'

import { Hero } from '../supplements/Snacks'

import { highlightPunctuation, randomize } from '../supplements/Functions'
import { concepts, humans } from '../supplements/Images'

// ============================== HOMEPAGE
// ============================== HOMEPAGE

export function Home() {
    const [skillSide, setskillSide] = useState(null)

    let coral = "#F5154F"
    let darkshellpurple = "#460096"
    let goldensun = "#ffa800"
    let mojito = "#35b883"
    let skyblue = "#3a85f4"
    let white = "#eaeaea"

    const backgroundColors = [coral, darkshellpurple, goldensun, mojito, skyblue]
    const introduction = "We turn good concepts into great web apps."
    const homeSkills = ["AngularJS", "Atlas", "Bootstrap", "BCrypt", "CSS3", "Express", "Express Session", "Figma", "Git", "GitHub", "Heroku", "HTML5", "JavaScript", "jQuery", "LESS", "Materialize", "MEAN stack", "MERN stack", "Microsoft Visual Studio Code", "MongoDB", "Mongoose", "Object Oriented Programming", "NERDS stack", "NodeJS", "PostgreSQL", "Postman", "React", "React Native", "RESTful APIs", "Ruby", "Ruby on Rails", "SASS", "Shopify", "Terminal", "Weebly", "Wordpress"]

    function measureSkillHeight() {
        setskillSide(window.innerWidth / 3)
    }

    useEffect(() => {
        measureSkillHeight()

        window.addEventListener("resize", () => {
            measureSkillHeight()
        })
    })

    return (
        <div className="container">
            <Hero hero={introduction} />

            <div className="project-spotlight" style={{
                backgroundImage: `url(${concepts.johnQCitizen})`,
                backgroundSize: 'cover',
                backgroundPositionX: '-150px'
            }}>
                <div className="spotlight-cover">
                    <div className="margined">
                        <h4>Latest Project</h4>
                        <h3 className="outline_coral">John Q. Citizen portfolio redesign</h3>
                    </div>
                </div>

                <div id="home-latest-project" className="btn-circle">
                    <IconContext.Provider value={{ color: white, size: "2.25rem" }}>
                        <IoMdArrowForward />
                    </IconContext.Provider>
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
                {homeSkills.map((skill, i) => {
                    return (
                        <div key={i} className="skillblock" style={{
                            backgroundColor: randomize(backgroundColors),
                            height: skillSide + 'px',
                            width: skillSide + 'px',
                        }}>
                            <h6>{skill}</h6>
                        </div>
                    )
                })}
            </div>

            <div className="for-hire">
                <div className="hire-information margined">
                    <h4>{highlightPunctuation("Let's work together.")}</h4>

                    <p>Whether you wanna rework an existing project or code something from the root up, we can help find the right solution for you.</p>
                    <Link to="/">
                        <button className="on-oceandark">Send us an email</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}