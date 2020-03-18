import React, { Component } from 'react';
import { HeaderInformation, RectangleTile } from './Snacks'

export class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    highlightPunctuation={this.props.highlightPunctuation}
                    pageTitle={this.props.welcome.projects}
                    pageDescription="We work independently, but periodically, we come together to collaborate on a project—whether it’s for fun or for a client." />

                <main className="project-cards">
                        <RectangleTile
                            address="/projects/john-q-citizen-portfolio-redesign"
                            gradientStyle="grad1"
                            image={require('../images/dev/john-citizen.png')}
                            navigate={this.props.navigate}
                            dimensions={this.props.dimensions}
                            title="John Q. Citizen portfolio redesign" />
                </main>
            </React.Fragment>
        )
    }
}