// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import { highlightPunctuation } from '../supplements/Functions'
import { humans } from '../supplements/Images'


// ============================== USER PROFILE
// ============================== USER PROFILE

export function UserProfile() {
    const [locationMetrics, setLocationMetrics] = useState({ city: null, state: null })

    function calcLocationMetrics() {
        const cityTown = document.getElementById("city").offsetWidth
        const stateProvince = document.getElementById("state").offsetWidth

        setLocationMetrics({
            city: cityTown + 0.5,
            state: stateProvince + 0.5
        })
    }

    useEffect(() => {
        calcLocationMetrics()
    }, [])

    return (
        <div id="user-profile" className="container">
            <section className="profile-header margined">
                <img src={humans.man2} alt="J. Benjamin Nimble" />
                <h5 className="coral">J. Benjamin Nimble</h5>
                <h6 className="beachfoam">Software Engineer</h6>

                <div className="contacts">
                    <IconContext.Provider value={{ color: "#111925", size: "20px" }}>
                        <a href="mailto:winslow@lighterfluid.co"><IoMdMail /></a>
                        <a href="https://www.linkedin.com"><IoLogoLinkedin /></a>
                        <a href="https://www.github.com"><IoLogoGithub /></a>
                    </IconContext.Provider>
                </div>
            </section>

            <section className="bio margined">
                <h6>Enim sed montes, maecenas ut sem vivamus quis. Sed eleifend metus a erat elementum eu egestas magna. Magnis non, egestas lectus sed. Ante leo euismod lorem ac quam.</h6>
            </section>

            <section className="location" style={{
                width: `${locationMetrics.city > locationMetrics.state ? locationMetrics.city + 'px' : locationMetrics.state + 'px'}`
            }}>
                <h4 id="city" className="beachfoam">{highlightPunctuation("Vancouver,")}</h4>
                <h4 id="state">{highlightPunctuation("British Columbia")}</h4>
            </section>
        </div>
    )
}