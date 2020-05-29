// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'
import { IconContext } from 'react-icons'
import { IoMdArrowForward } from 'react-icons/io'

import { Hero } from '../supplements/Snacks'
import { colors } from '../supplements/Variables'

import { highlightPunctuation } from '../supplements/Functions'
import { concepts, humans } from '../supplements/Images'

// ============================== HOMEPAGE
// ============================== HOMEPAGE

export function Home(props) {
    const introduction = "We turn good concepts into great web apps."
    const services = ["UI / UX design", "Web design", "Wordpress & Squarespace templates"]
    

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

                <button className="btn-round btn-round-image">
                    <IconContext.Provider value={{ color: colors.white, size: "2.25rem" }}>
                        <IoMdArrowForward />
                    </IconContext.Provider>
                </button>
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

            <div className="info-footer">
                <div className="info-footer_info margined">
                    <h2>{highlightPunctuation("Let's work together.")}</h2>

                    <p>Whether you wanna rework an existing project or code something from the root up, we can help find the right solution for you.</p>

                    <ul className="info-footer_services">
                        {services.map((service, _i) => {
                            return (
                                <li key={_i}>{service}</li>
                            )
                        })}
                    </ul>


                    <a href="mailto:hello@lighterfluid.co">
                        <div className="btn-inline">
                            <p id="information-email">Send us an email</p>
                            <div className="underscore"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}