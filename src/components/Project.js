// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosGlobe } from 'react-icons/io'

import { concepts } from '../supplements/Images'
import { Hero, Interview } from '../supplements/Snacks'
import { colors } from '../supplements/Variables'


// ============================== DASHBOARD
// ============================== DASHBOARD

export function Project(props) {
    return (
        <div id="project" className="container">
            <Hero hero="John Q. Citizen portfolio redesign" />

            <div className="project_image" style={{
                backgroundImage: `url(${concepts.johnQCitizen})`,
                backgroundSize: 'cover',
                backgroundPositionX: '-10px'
            }}>

                <a href="https://bing.com">
                    <button className="btn-round btn-round-image">
                        <IconContext.Provider value={{ color: colors.white, size: "2.25rem" }}>
                            <IoIosGlobe />
                        </IconContext.Provider>
                    </button>
                </a>
            </div>

            <div className="project_sheet margined">
                <div className="columned-interviews">
                    <Interview
                        question="Developer"
                        answer="J. Benjamin Nimble" />

                    <Interview
                        question="Completed"
                        answer="December 2020" />
                </div>

                <Interview
                    question="Overview"
                    answer="Interdum mi molestie venenatis dignissim nibh. Panius nunc est condimentum vestibulum est a quam tellus. Ac blandit pharetra pulvinar sit odio. Quam lobortis tincidunt egestas eget lacus. Proin sit etiam urna sit magna auctor. Et donec." />

                <Interview
                    question="Technologies used"
                    answer="HTML5, CSS3, Ruby on Rails, React, Postgres" />
            </div>
        </div>
    )
}