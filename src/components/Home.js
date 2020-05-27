// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { IoMdArrowForward } from 'react-icons/io'

import { Hero } from '../supplements/Snacks'

import { highlightPunctuation } from '../supplements/Functions'
import { concepts, humans } from '../supplements/Images'

// ============================== HOMEPAGE
// ============================== HOMEPAGE

export function Home() {
    const introduction = "We turn good concepts into great web apps."
    const [colors, setColors] = useState({
        "blue": "#3a85f4",
        "gold": "#ffa800",
        "green": "#35b883",
        "purple": "#460096",
        "red": "#F5154F",
        "white": "#eaeaea"
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
                    <IconContext.Provider value={{ color: colors.white, size: "2.25rem" }}>
                        <IoMdArrowForward />
                    </IconContext.Provider>
                </div>
            </div>

            <div className="about-us margined">
                <h6>We are two US-based software engineers located in San Francisco and Atlanta.</h6>

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

            <div id="expanse"></div>

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