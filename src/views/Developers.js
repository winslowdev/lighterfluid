import React, { Component } from 'react'
import { RectangleProfileTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Developers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h6 className={this.props.theme.importantText}>We're freelance developers around the United States.</h6>
                </div>

                <div className="profiles">
                    <RectangleProfileTile
                        address="jack"
                        bgColor="bg-ocean"
                        color="text-greenmint"
                        designation="Software Engineer"
                        image={stock.hopeMan}
                        metrics={this.props.metrics}
                        name="J. Benjamin Nimble"
                        theme={this.props.theme} />
                    <RectangleProfileTile
                        address="jack"
                        bgColor="bg-greenmint"
                        color="text-golden"
                        designation="Front-End Developer"
                        image={stock.gazingMan}
                        metrics={this.props.metrics}
                        name="Daniel Walraven"
                        theme={this.props.theme} />
                </div>

            </React.Fragment>
        )
    }
}