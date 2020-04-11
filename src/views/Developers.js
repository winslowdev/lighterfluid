import React, { Component } from 'react'
import { Header, Hero, RectangleProfileTile } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Developers extends Component {
    render() {

        return (
            <React.Fragment>
                <Header
                    first
                    theme={this.props.theme}
                    thisPageTitle="Developers" />
                <Hero
                    statement={[`We're freelance developers`, <br />, `around the United States.`]}
                    theme={this.props.theme} />

                <main id="developers">
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

                </main>

            </React.Fragment>
        )
    }
}