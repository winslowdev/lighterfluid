// ============================== IMPORTS

import React, { Component } from 'react'
import { stock } from '../universals/Images'
import { Team, TeamLeader } from '../universals/Snacks'


// ============================== PROJECT ITEM ON MOBILE

export class ProjectItem extends Component {
    render() {
        return (
            <div id="project-sheet">
                <h1 className="sheet-title">John Q. Citizen portfolio redesign</h1>
                <img src={stock.workspacespace} className="sheet-image" />

                <div className="sheet-record">
                    <div className="record-basics">
                        <Team this="Developer" that="Ross Davidson" address="/developers/ross-davidson" />
                        <Team this="Completed" that="December 2029" />
                    </div>

                    <div className="record-links">
                        <TeamLeader that="Live website" address="https://wins.dev" />
                        <TeamLeader that="GitHub" address="https://github.com/winslowdev" />
                    </div>

                    <p>Privacy and security matter. Stop using hand sanitizerer. You can use this vanilla JS-based tool to generate a stronger password. If you need a password manager, I highly recommend using 1Password.</p>
                </div>
            </div>
        )
    }
}