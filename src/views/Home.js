// ============================== IMPORTS

import React, { Component } from 'react';
import { SquareTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="hero">
                    <h6 className={this.props.theme.importantText}>We turn good concepts <br />into badass web apps.</h6>
                </div>

                <nav>
                    <SquareTile
                        address="developers"
                        label="Developers"
                        image={stock.elCapitan}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="projects"
                        label="Projects"
                        image={stock.goldenGate}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="services"
                        label="Services"
                        image={stock.hollywoodSign}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                    <SquareTile
                        address="contact"
                        label="Contact"
                        image={stock.bixbyBridge}
                        metrics={this.props.metrics}
                        theme={this.props.theme} />
                </nav>

            </React.Fragment>
        )
    }
}