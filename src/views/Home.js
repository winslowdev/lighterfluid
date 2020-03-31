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
                    <h6>We turn good concepts <br />into badass web apps.</h6>
                </div>

                <nav>
                    <SquareTile
                        address="/developers"
                        captain="Get to know us"
                        image={stock.elCapitan}
                        sizes={this.props.sizes} />
                    <SquareTile
                        address="/projects"
                        captain="See our projects"
                        image={stock.elCapitan}
                        sizes={this.props.sizes} />
                        <SquareTile
                        address="/services"
                        captain="See our projects"
                        image={stock.elCapitan}
                        sizes={this.props.sizes} />
                        <SquareTile
                        address="/contact"
                        captain="See our projects"
                        image={stock.elCapitan}
                        sizes={this.props.sizes} />
                </nav>

            </React.Fragment>
        )
    }
}