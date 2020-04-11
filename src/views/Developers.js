import React, { Component } from 'react'
import { Header, Hero, TileRectangle } from '../universals/Snacks'
import { stock } from '../universals/Images'

export class Developers extends Component {
    render() {

        return (
            <React.Fragment>
                <Header
                    first
                    theme={this.props.theme}
                    pageHeader="Developers" />
                <Hero
                    statement={[`We're freelance developers`, <br />, `around the United States.`]}
                    theme={this.props.theme} />

                <main id="developers">
                    <TileRectangle
                        address="jack"
                        tileColor="oceandark-bg"
                        textColor="accentgreen"
                        designation="Software Engineer"
                        image={stock.hopeMan}
                        metrics={this.props.metrics}
                        name="J. Benjamin Nimble"
                        theme={this.props.theme} />
                    <TileRectangle
                        address="jack"
                        tileColor="accentpurple-bg"
                        textColor="accentgold"
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