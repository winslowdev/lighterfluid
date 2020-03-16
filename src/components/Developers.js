import React, { Component } from 'react';
import { HeaderInformation } from './Snacks'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderInformation
                    pageTitle={this.props.pageTitles.developers}
                    pageDescription="We are a network of freelance developers located throughout the United States—from sea to shining C#." />
            </React.Fragment>
        )
    }
}