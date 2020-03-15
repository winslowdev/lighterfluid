import React, { Component } from 'react';
import { Navigation } from './Snacks/Navigation'
import { FullWidthTile, HalfWidthTile } from './Snacks/Tiles'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation
                    navigate={this.props.navigate} />
            </React.Fragment>
        )
    }
}