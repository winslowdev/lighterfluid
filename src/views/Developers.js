// ============================== IMPORTS

import React, { Component } from 'react';
import { stock } from '../universals/Images'
import { PageInformation, SquareTile } from '../universals/Snacks'


// ============================== DEVELOPERS ON MOBILE

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <PageInformation
                    pageTitle={this.props.statements.developers}
                    pageDescription="We are a network of freelance developers located throughout the United States—from sea to shining C#." />

                    <div className="developer-grid">
                    <SquareTile
                        address="/profiles/jack"
                        image={stock.genericMale}
                        sizes={this.props.sizes}
                        title="Winslow Mays" />
                    <SquareTile
                        address="/profiles/jack"
                        image={stock.genericMale}
                        sizes={this.props.sizes}
                        title="Winslow Mays" />
                    </div>
            </React.Fragment>
        )
    }
}