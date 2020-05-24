import React, { Component } from 'react'
import { Header, Hero, RectangleLink } from '../universals/Snacks'
import { dev } from '../universals/Images'

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
                    <RectangleLink
                        address="johnqcitizen"
                        designation="portfolio redesign"
                        gradient="gradient_orange-teal-blue"
                        metrics={this.props.metrics}
                        name="John Q. Citizen"
                        previewImage={dev.johnQCitizen}
                        theme={this.props.theme} />
                    <RectangleLink
                        address="johnqcitizen"
                        designation="React Native app"
                        gradient="gradient_blue-yellow"
                        metrics={this.props.metrics}
                        name="In His Dominion"
                        previewImage={dev.concepts}
                        theme={this.props.theme} />
                </main>
            </React.Fragment>
        )
    }
}