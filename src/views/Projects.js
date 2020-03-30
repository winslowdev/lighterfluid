// ============================== IMPORTS

import React, { Component } from 'react';
import { PageInformation, RectangleTile } from '../universals/Snacks'

// ============================== PROJECTS ON MOBILE

export class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <PageInformation
                    pageTitle={this.props.statements.projects}
                    pageDescription="We work independently, but periodically, we come together to collaborate on a project—whether it’s for fun or for a client." />

                <main className="project-cards">
                        <RectangleTile
                            address="/projects/john-q-citizen-portfolio-redesign"
                            gradientStyle="grad1"
                            image={require('../images/dev/john-citizen.png')}
                            sizes={this.props.sizes}
                            title="John Q. Citizen portfolio redesign" />
                </main>
            </React.Fragment>
        )
    }
}