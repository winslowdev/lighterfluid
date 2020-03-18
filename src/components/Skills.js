import React, { Component } from 'react';
import { HeaderInformation } from './Snacks'

export class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle={this.props.statements.skills}
                    pageDescription="We all speak English. Some of us know Korean or German. But we also have working knowledge of React, AngularJS, SQL, and the list goes on." />

                    <div className="skills">
                        <div className="skills-item">HTML5</div>
                        <div className="skills-item">MongoDB</div>
                        <div className="skills-item">Wireframes & mockups</div>
                        <div className="skills-item">CSS3</div>
                        <div className="skills-item">React Native</div>
                        <div className="skills-item">PostgreSQL</div>
                        <div className="skills-item">SASS</div>
                        <div className="skills-item">Bcrypt</div>
                        <div className="skills-item">Git</div>
                    </div>
            </React.Fragment>
        )
    }
}