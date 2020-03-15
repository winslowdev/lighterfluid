import React, { Component } from 'react';

export class FullWidthTile extends Component {
    render() {
        return (
            <div className={`rect-tile ${this.props.imageClass}`}
                onClick={() => { { this.props.navigate("internal", this.props.address) } }}>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export class HalfWidthTile extends Component {
    render() {
        return (
            <div
                className={`square-tile ${this.props.imageClass}`}
                onClick={() => { { this.props.navigate("internal", this.props.address) } }}>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}