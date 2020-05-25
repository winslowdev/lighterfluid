// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { humans, icons } from '../Images'
import { highlightPunctuation } from '../Functions'

// ============================== USER PROFILE
// ============================== USER PROFILE

export function UserProfile() {
    const [locationMetrics, setLocationMetrics] = useState({ city: null, state: null })

    function calcLocatioMetrics() {
        const cityTown = document.getElementById("city").offsetWidth
        const stateProvince = document.getElementById("state").offsetWidth

        setLocationMetrics({
            city: cityTown + 0.5,
            state: stateProvince + 0.5
        })
    }

    useEffect(() => {
        calcLocatioMetrics()
    })

    return (
        <div id="user-profile" className="container">
            <section className="profile-header margined">
                <img src={humans.man2} alt="J. Benjamin Nimble" />
                <h5 className="coral">J. Benjamin Nimble</h5>
                <h6 className="beachfoam">Software Engineer</h6>

                <div className="contacts">
                    <img src={icons.contactEmail} className="contact-icon" alt="Send an email." />
                    <img src={icons.linkedin} className="contact-icon" alt="Send an email." />
                    <img src={icons.github} className="contact-icon" alt="Send an email." />
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