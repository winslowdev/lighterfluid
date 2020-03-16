import React, { Component } from 'react';
import { FullWidthTile, HalfWidthTile } from './Snacks'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <aside>
                    <div className="container" id="developers">
                        <h1>Developers & designers</h1>
                        <p>We are a network of freelance developers located throughout the United States—from sea to shining C#.</p>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}