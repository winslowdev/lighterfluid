import React, { Component } from 'react'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h6 className={this.props.theme.importantText}>We're freelance developers around the United States. <br />From sea to shining C#.</h6>
                </div>

            </React.Fragment>
        )
    }
}