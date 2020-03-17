import React, { Component } from 'react';
import { RectangleTile, SquareTile } from './Snacks'

export class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <aside className="home">
                    <div id="home-hero" className="container">
                        <h2>{this.props.highlightPunctuation("Captain Planet—he's our hero. Gonna take pollution down to zero.")}</h2>
                    </div>
                </aside>

                <p className="brand-statement">Id lorem ut at tellus felis mattis aliquam. A et rum blandit sed tristique ut. Ipsum pulvinar eu pretium sit massa sed suspendisse sed proin nibh cras. Tellus elementum sed sed. Porta nisi viverra sit a auctor libero. In nunc quis?</p>

                <RectangleTile
                    address="/projects"
                    gradientStyle="grad1"
                    image={require('../images/stock/workspace.jpg')}
                    navigate={this.props.navigate}
                    dimensions={this.props.dimensions}
                    title={this.props.pageTitles.projects} />

                <div className="forced-rectangle">
                    <SquareTile
                        address="/developers"
                        gradientStyle="grad2"
                        image={require('../images/stock/fake-cyclist.jpg')}
                        navigate={this.props.navigate}
                        dimensions={this.props.dimensions}
                        title={this.props.pageTitles.developers} />
                    <SquareTile
                        address="/skills"
                        gradientStyle="grad3"
                        image={require('../images/stock/code-sample.jpg')}
                        navigate={this.props.navigate}
                        dimensions={this.props.dimensions}
                        title={this.props.pageTitles.skills} />
                </div>
            </React.Fragment>
        )
    }
}