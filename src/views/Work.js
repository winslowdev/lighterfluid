import React, { Component } from 'react'
import { Header, Hero, TileRectangleWork } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Work extends Component {
    render() {

        return (
            <React.Fragment>
                <Header
                    first
                    theme={this.props.theme}
                    pageHeader="Collaborative projects" />
                <Hero
                    statement={[`Check out some of`, <br />, `our collab work.`]}
                    theme={this.props.theme} />

                <main id="work">
                    <TileRectangleWork
                        address="johnqcitizen"
                        designation="portfolio redesign"
                        metrics={this.props.metrics}
                        name="John Q. Citizen"
                        theme={this.props.theme} />
                    <TileRectangleWork
                        address="johnqcitizen"
                        designation="React Native app"
                        metrics={this.props.metrics}
                        name="In His Dominion"
                        theme={this.props.theme} />
                </main>
            </React.Fragment>
        )
    }
}