import React, { Component } from 'react'
import { stock, dev } from '../universals/Images'
import { Header, SquareTile, Team, ContactBullet, Bullet, TeamLeader } from '../universals/Snacks'

export class ThisProject extends Component {
    render() {
        const theme = this.props.theme

        return (
            <React.Fragment>

                <Header
                    second
                    theme={this.props.theme}
                    pageHeader={"Collaborative projects"} />

                <main id="project-profile">

                    {/* PROFILE IMAGE, NAME, DESIGNATION */}
                    <div id="introduction">
                        <h2 className={`marginalized ${theme.headliner}`}>John Q. Citizen<br />portfolio redesign</h2>

                        <img src={dev.sinWillFindYou} alt="project preview" />
                    </div>

                    <div className="record-info marginalized">
                        <div className="sheet-data">
                            <Team
                                captain="Developer"
                                player="J. Benjamin Nimble"
                                theme={theme} />

                            <Team
                                captain="Completed"
                                player="2019"
                                theme={theme} />
                        </div>

                        <div className="external-links">
                            <TeamLeader
                                address="github.com/winslow/lighterfluid"
                                captain="Live website" />
                            <TeamLeader
                                address="github.com/winslow/lighterfluid"
                                captain="GitHub" />
                        </div>
                    </div>

                    <p className={`headliner ${this.props.theme.hero}`}>Interdum mi molestie venenatis dignissim nibh. Penatibus nunc est condimentum vestibulum est a quam tellus. Ac blandit pharetra pulvinar sit odio. Quam lobortis tincidunt egestas eget lacus. Proin sit etiam urna sit magna auctor. Et donec.</p>

                    <div className="project-img-gallery">
                        <img src={dev.sinWillFindYou} alt="imj gallery" />
                        <img src={dev.sinWillFindYou} alt="imj gallery" />
                        <img src={dev.sinWillFindYou} alt="imj gallery" />
                    </div>
                </main>

            </React.Fragment>
        )
    }
}