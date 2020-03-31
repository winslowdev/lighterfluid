// ============================== IMPORTS

import React, { Component } from 'react';
import { highlightPunctuation, navigate } from '../universals/Functions'
import { SquareTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="hero">
                    <h6>{this.props.thisPage.intro}</h6>
                </div>

                <nav>
                    <SquareTile
                        renderStyling={this.props.renderStyling}
                        address="developers"
                        captain="Developers"
                        gradientColor="blue--red"
                        image={stock.elCapitan}
                        sizes={this.props.sizes} />
                    <SquareTile
                        address="/projects"
                        captain="Projects"
                        gradientColor="blue--yellow"
                        image={stock.goldenGateBridge}
                        sizes={this.props.sizes} />
                    <SquareTile
                        address="/services"
                        captain="Services"
                        gradientColor="orange-teal-blue"
                        image={stock.hollywoodSign}
                        sizes={this.props.sizes} />
                    <SquareTile
                        address="/contact"
                        captain="Contact"
                        gradientColor="blue--green"
                        image={stock.bixbyCreekBridge}
                        sizes={this.props.sizes} />
                </nav>

            </React.Fragment>
        )
    }
}