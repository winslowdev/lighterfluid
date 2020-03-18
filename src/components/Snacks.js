import React, { Component } from 'react';
import { highlightPunctuation } from './snacks/functions';

// PAGE TITLE, PAGE DESCRIPTION
export class HeaderInformation extends Component {
    render() {
        return (
            <aside className="page-hero">
                <div className="container" id="developers">
                    <h1>{highlightPunctuation(this.props.pageTitle)}</h1>
                    <p className="page-description">{this.props.pageDescription}</p>
                </div>
            </aside>
        )
    }
}

export class RectangleTile extends Component {
    render() {
        return (
            <div className="rectangled"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.rectangleHeight + 'px',
                }}
                onClick={() => { this.props.navigate("internal", this.props.address) }}>
                <div className={`coverpiece ${this.props.gradientStyle}`}>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export class SquareTile extends Component {
    render() {
        return (
            <div
                className="squared"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.squareHeight + 'px',
                }}
                onClick={() => { this.props.navigate("internal", this.props.address) }}>
                <div className={`coverpiece ${this.props.gradientStyle}`}>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}