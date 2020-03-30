// ============================== IMPORTS

import React, { Component } from 'react';
import { highlightPunctuation } from '../universals/Functions'
import { RectangleTile, SquareTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <aside className="hero">
                    <h2 className="container">{highlightPunctuation(this.props.statements.home)}</h2>
                </aside>

                <p className="brand-statement">Id lorem ut at tellus felis mattis aliquam. Adem et rum blandit sed tristique ut. Ipsum pulvinar eu pretium sit sed suspendisse sed proin nibh cras. Tellus elementum sed sed. Porta nisi.</p>

                <RectangleTile
                    address="/projects"
                    gradientStyle="grad1"
                    image={stock.workspacespace}
                    sizes={this.props.sizes}
                    title={this.props.statements.projects} />

                <div className="forced-rectangle">
                    <SquareTile
                        address="/developers"
                        gradientStyle="grad2"
                        image={stock.fakeCyclist}
                        sizes={this.props.sizes}
                        title={this.props.statements.developers} />
                    <SquareTile
                        address="/skills"
                        gradientStyle="grad3"
                        image={stock.codeSample}
                        sizes={this.props.sizes}
                        title={this.props.statements.skills} />
                </div>
            </React.Fragment>
        )
    }
}