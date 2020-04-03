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
                        captain="Developers"
                        gradientColor="blue--red"
                        image={stock.elCapitan}
                        dimensions={this.props.dimensions}
                        theme={this.props.theme} />
                    <SquareTile
                        address="projects"
                        captain="Projects"
                        gradientColor="blue--yellow"
                        image={stock.goldenGate}
                        dimensions={this.props.dimensions}
                        theme={this.props.theme} />
                    <SquareTile
                        address="services"
                        captain="Services"
                        gradientColor="orange-teal-blue"
                        image={stock.hollywoodSign}
                        dimensions={this.props.dimensions}
                        theme={this.props.theme} />
                    <SquareTile
                        address="contact"
                        captain="Contact"
                        gradientColor="blue--green"
                        image={stock.bixbyBridge}
                        dimensions={this.props.dimensions}
                        theme={this.props.theme} />
                </nav>

            </React.Fragment>
        )
    }
}