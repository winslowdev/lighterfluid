import React, { Component } from 'react'
import { Header, Hero, RectangleProfileTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Developers extends Component {
    render() {

        return (
            <React.Fragment>
                <Header />
                <Hero
                    statement={[`We're freelance developers`, <br />, `around the United States.`]}
                    theme={this.props.theme} />

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