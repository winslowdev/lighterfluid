// ============================== IMPORTS
// ============================== IMPORTS

import React, { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { IoMdArrowForward } from 'react-icons/io'

import { Hero } from '../supplements/Snacks'
import { colors } from '../supplements/Variables'

import { highlightPunctuation, randomize } from '../supplements/Functions'
import { concepts, humans } from '../supplements/Images'


// ============================== HOMEPAGE
// ============================== HOMEPAGE

export function Home(props) {
    const introduction = "We turn good concepts into great web apps."
    const services = ["UI / UX design", "Web design", "Wordpress & Squarespace templates"]

    function renderAntivoidSquares() {
        const antivoid = document.getElementById("antivoid")
        const squareQuantity = 60
        let i;

        for (i = 0; i < squareQuantity; i++) {
            let div = document.createElement("DIV")
            let length = window.innerWidth / 6 + 'px'

            div.style.backgroundColor = colors.blue
            div.style.width = length
            div.style.height = length
            antivoid.appendChild(div)
        }
    }

    useEffect(() => {
        renderAntivoidSquares()

        console.log(colors)
    })


    return (
        <div id="home" className="container">
            <Hero hero={introduction} />

            <div className="project_image" style={{
                backgroundImage: `url(${concepts.johnQCitizen})`,
                backgroundSize: 'cover',
                backgroundPositionX: '-150px'
            }}>
                <div className="cover" style={{ backgroundColor: colors.oceandark }}>
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

            <div id="home_about" className="margined">
                <h6>We are two US-based software engineers located in San Francisco and Atlanta.</h6>

                <div className="columned-previews">
                    <div className="preview">
                        <img src={humans.man1} alt="Ross Davidson" />
                        <h5>Ross</h5>
                    </div>

                    <div className="preview">
                        <img src={humans.man2} alt="Winslow Mays" />
                        <h5>Winslow</h5>
                    </div>
                </div>
            </div>

            <div id="antivoid"></div>

            <div className="home_footer">
                <div className="home_footer-info margined">
                    <h2>{highlightPunctuation("Let's work together.")}</h2>

                    <p>Whether you wanna rework an existing project or code something from the root up, we can help find the right solution for you.</p>

                    <ul className="home_footer-services">
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