// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import { highlightPunctuation } from '../supplements/Functions'
import { concepts, humans } from '../supplements/Images'
import { Interview, ProjectSquare, SkillBullet } from '../supplements/Snacks'
import { colors } from '../supplements/Variables'


// ============================== USER PROFILE
// ============================== USER PROFILE

export function Profile() {
    const [view, setView] = useState({ about: false, projects: true, skills: false })

    function toggleView(route) {
        if (route === "projects") {
            setView({
                projects: true,
                skills: false,
                about: false
            })
        } else if (route === "skills") {
            setView({
                projects: false,
                skills: true,
                about: false
            })
        } else if (route === "about") {
            setView({
                projects: false,
                skills: false,
                about: true
            })
        }
    }

    return (
        <div id="profile" className="container">
            <section id="profile_header" className="margined">
                <img src={humans.man2} alt="J. Benjamin Nimble" />
                <h5 className="coral">J. Benjamin Nimble</h5>
                <h6 className="beachfoam">Software Engineer</h6>

                <div className="profile_header-contacts">
                    <IconContext.Provider value={{ color: "#111925", size: "20px" }}>
                        <a href="mailto:winslow@lighterfluid.co"><IoMdMail /></a>
                        <a href="https://www.linkedin.com"><IoLogoLinkedin /></a>
                        <a href="https://www.github.com"><IoLogoGithub /></a>
                    </IconContext.Provider>
                </div>
            </section>

            <section id="profile_statement" className="margined">
                <h6>Enim sed montes, maecenas ut sem vivamus quis. Sed eleifend metus a erat elementum eu egestas magna. Magnis non, egestas lectus sed. Ante leo euismod lorem ac quam.</h6>
            </section>

            <section id="profile_locale" className="margined">
                <div className="profile_locale-info">
                    <h4>{highlightPunctuation("Eureka,")}</h4>
                    <h4>{highlightPunctuation("California")}</h4>
                </div>
            </section>

            <section id="profile_modal">
                <div className="profile_modal-toggles">
                    <h6 style={{ color: view.projects ? colors.oceandark : null }} onClick={() => { (toggleView("projects")) }}>Projects</h6>
                    <h6 style={{ color: view.skills ? colors.oceandark : null }} onClick={() => { (toggleView("skills")) }}>Skills</h6>
                    <h6 style={{ color: view.about ? colors.oceandark : null }} onClick={() => { (toggleView("about")) }}>About</h6>
                </div>

                {view.projects ? <ProjectsHere /> : null}
                {view.skills ? <SkillsHere /> : null}
                {view.about ? <AboutHere /> : null}
            </section>
        </div>
    )
}

// ============================== THIS DEVELOPER'S PROJECTS
// ============================== THIS DEVELOPER'S PROJECTS

function ProjectsHere() {
    return (
        <div id="profile_modal-projects">
            <ProjectSquare
                color={colors.purple}
                title="John Q. Citizen portfolio redesign"
                image={concepts.johnQCitizen} />
            <ProjectSquare
                color={colors.green}
                title="romanizeMeCaptain"
                image={concepts.johnQCitizen} />
            <ProjectSquare
                color={colors.gold}
                title="pw_generator"
                image={concepts.johnQCitizen} />
            <ProjectSquare
                color={colors.blue}
                title="Wagamuffin Bakery"
                image={concepts.johnQCitizen} />
        </div>
    )
}


// ============================== THIS DEVELOPER'S SKILLS
// ============================== THIS DEVELOPER'S SKILLS

function SkillsHere() {
    return (
        <div id="profile_modal-skills" className="margined">
            <SkillBullet
                label="HTML5" />
            <SkillBullet
                label="Object Oriented Programming" />
            <SkillBullet
                label="Ruby" />
            <SkillBullet
                label="Squarespace CMS" />
            <SkillBullet
                label="MongoDB" />
            <SkillBullet
                label="BCrypt" />
            <SkillBullet
                label="jQuery" />
            <SkillBullet
                label="MEAN stack" />
            <SkillBullet
                label="React Native" />
            <SkillBullet
                label="Git" />
            <SkillBullet
                label="Figma" />
            <SkillBullet
                label="JavaScript" />
            <SkillBullet
                label="LESS" />
            <SkillBullet
                label="ReactJS" />
            <SkillBullet
                label="NERDS stack" />
            <SkillBullet
                label="Adobe Photoshop" />
            <SkillBullet
                label="Postman" />
            <SkillBullet
                label="MERN stack" />
            <SkillBullet
                label="Microsoft Visual Studio Code" />

        </div>
    )
}


// ============================== THIS DEVELOPER'S ABOUT
// ============================== THIS DEVELOPER'S ABOUT

function AboutHere() {
    return (
        <div id="project_modal-about" className="margined">
            <Interview
                question="Your intro says you were a German translator. How’d you go from linguistics to tech?"
                answer="Iaculis pulvinar scelerisque faucibus vestibulum velit bibendum non. Non ultrices neque, et tellus vulputate." />
            <Interview
                question="How long ago was that? Like 2 or 3 years ago?"
                answer="Enim, nascetur bibendum egestas enim. Sit tellus maecenas at tempor tincidunt odio. Cursus rutrum sed vitae scelerisque imperdiet viverra cras molestie. Elit eu augue posuere vel augue dictum ornare metus pellentesque." />
            <Interview
                question="Then why would I hire you over someone with more experience?"
                answer="Vestibulum nec tristique scelerisque aliquam accumsan amet volutpat. Rhoncus, amet purus nisl, aliquet commodo eleifend. Tellus adipiscing volutpat leo mattis volutpat mi orci." />
        </div>
    )
}