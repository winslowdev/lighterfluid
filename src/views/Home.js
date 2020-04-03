// ============================== IMPORTS

import React, { Component } from 'react';
import { SquareTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="hero">
                    <h6 className={this.props.style.importantText}>{this.props.thisPage.intro}</h6>
                </div>

                <nav>
                    <SquareTile
                        address="developers"
                        captain="Developers"
                        gradientColor="blue--red"
                        image={stock.elCapitan}
                        provideInformation={this.props.provideInformation}
                        sizes={this.props.sizes}
                        style={this.props.style} />
                    <SquareTile
                        address="projects"
                        captain="Projects"
                        gradientColor="blue--yellow"
                        image={stock.goldenGate}
                        provideInformation={this.props.provideInformation}
                        sizes={this.props.sizes}
                        style={this.props.style} />
                    <SquareTile
                        address="services"
                        captain="Services"
                        gradientColor="orange-teal-blue"
                        image={stock.hollywoodSign}
                        provideInformation={this.props.provideInformation}
                        sizes={this.props.sizes}
                        style={this.props.style} />
                    <SquareTile
                        address="contact"
                        captain="Contact"
                        gradientColor="blue--green"
                        image={stock.bixbyBridge}
                        provideInformation={this.props.provideInformation}
                        sizes={this.props.sizes}
                        style={this.props.style} />
                </nav>

            </React.Fragment>
        )
    }
}