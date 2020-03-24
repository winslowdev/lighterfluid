import React, { Component } from 'react';
import { HeaderInformation } from './components/Snacks'
import { SquareTile } from './components/Snacks'
import { profiles } from './components/Images'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle={this.props.statements.developers}
                    pageDescription="We are a network of freelance developers located throughout the United States—from sea to shining C#." />

                    <div className="developer-grid">
                    <SquareTile
                        address="/profiles/winslow-mays"
                        image={profiles.addison}
                        sizes={this.props.sizes}
                        title="Winslow Mays" />
                    <SquareTile
                        address="/profiles/winslow-mays"
                        image={profiles.addison}
                        sizes={this.props.sizes}
                        title="Winslow Mays" />
                    </div>
            </React.Fragment>
        )
    }
}