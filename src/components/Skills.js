import React, { Component } from 'react';
import { HeaderInformation } from './Snacks'

export class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle="Stacks, languages & framework"
                    pageDescription="We all speak English. Some of us know Korean or German. But we also have working knowledge of React, AngularJS, SQL, and the list goes on." />

                    <div className="skills-grid">
                        <div className="skill">HTML5</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">Wireframes & mockups</div>
                        <div className="skill">CSS3</div>
                        <div className="skill">React Native</div>
                        <div className="skill">PostgreSQL</div>
                        <div className="skill">SASS</div>
                        <div className="skill">Bcrypt</div>
                        <div className="skill">Git</div>
                    </div>
            </React.Fragment>
        )
    }
}