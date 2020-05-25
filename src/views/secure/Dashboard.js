import React, { Component } from 'react'

import { Header, Hero } from '../../universals/Snacks'

export class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Hero
                    statement={[`Here's your dashboard.`, <br />, `Try not to get dashboard.`]}
                    theme={this.props.theme} />
            </React.Fragment>
        )
    }
}