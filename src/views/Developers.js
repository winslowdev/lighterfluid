import React, { Component } from 'react'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h6 className={this.props.style.importantText}>{this.props.thisPage.intro}</h6>
                </div>

            </React.Fragment>
        )
    }
}