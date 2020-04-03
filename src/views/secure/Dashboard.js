import React, { Component } from 'react'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h6 className={this.props.style.importantText}>Here's your dashboard. <br />Try not to get dashbored.</h6>
                </div>
            </React.Fragment>
        )
    }
}