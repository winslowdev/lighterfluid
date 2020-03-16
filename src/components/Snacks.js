import React, { Component } from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';

// PAGE TITLE, PAGE DESCRIPTION
export class HeaderInformation extends Component {
    render() {
        return (
            <aside className="page-info">
                <div className="container" id="developers">
                    <h1>{this.props.pageTitle}</h1>
                    <p className="page-description">{this.props.pageDescription}</p>
                </div>
            </aside>
        )
    }
}

export class RectangleTile extends Component {
    render() {
        return (
            <div className="rect-tile"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.dimensions.rectangleHeight + 'px',
                }}
                onClick={() => { { this.props.navigate("internal", this.props.address) } }}>
                <div className={`tile-cover ${this.props.gradientStyle}`}>
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
                className="square-tile"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.dimensions.squareHeight + 'px',
                }}
                onClick={() => { { this.props.navigate("internal", this.props.address) } }}>
                <div className={`tile-cover ${this.props.gradientStyle}`}>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}