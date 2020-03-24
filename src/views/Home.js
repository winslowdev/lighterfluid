import React, { Component } from 'react';
import { RectangleTile, SquareTile } from './components/Snacks'
import { highlightPunctuation } from './components/Functions'
import { backgrounds } from './components/Images'

export class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <aside className="home">
                    <div id="home-hero" className="container">
                        <h2>{highlightPunctuation(this.props.statements.home)}</h2>
                    </div>
                </aside>

                <p className="brand-statement">Id lorem ut at tellus felis mattis aliquam. A et rum blandit sed tristique ut. Ipsum pulvinar eu pretium sit massa sed suspendisse sed proin nibh cras. Tellus elementum sed sed. Porta nisi viverra sit a auctor libero. In nunc quis?</p>

                <RectangleTile
                    address="/projects"
                    gradientStyle="grad1"
                    image={backgrounds.workspace}
                    sizes={this.props.sizes}
                    title={this.props.statements.projects} />

                <div className="forced-rectangle">
                    <SquareTile
                        address="/developers"
                        gradientStyle="grad2"
                        image={backgrounds.fakeCyclist}
                        sizes={this.props.sizes}
                        title={this.props.statements.developers} />
                    <SquareTile
                        address="/skills"
                        gradientStyle="grad3"
                        image={backgrounds.codeSample}
                        sizes={this.props.sizes}
                        title={this.props.statements.skills} />
                </div>
            </React.Fragment>
        )
    }
}