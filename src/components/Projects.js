import React, { Component } from 'react';
import { HeaderInformation, RectangleTile } from './Snacks'

export class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle="Collaborative projects"
                    pageDescription="We work independently, but periodically, we come together to collaborate on a project—whether it’s for fun or for a client." />

                <main className="project-cards">
                    <div className="project-card">
                        <RectangleTile
                            address="/projects"
                            imageClass="black"
                            navigate={this.props.navigate}
                            dimensions={this.props.dimensions}
                            title="John Q. Citizen portfolio redesign" />
                    </div>
                </main>
            </React.Fragment>
        )
    }
}