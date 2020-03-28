// ============================== IMPORTS

import React, { Component } from 'react'
import { stock } from '../universals/Images'
import { TagTeam, DirectLink } from '../universals/Snacks'


// ============================== PROJECT ITEM ON MOBILE

export class ProjectItem extends Component {
    render() {
        return (
            <div id="project-sheet">
                <h1 className="sheet-title">John Q. Citizen portfolio redesign</h1>
                <img src={stock.workspacespace} className="sheet-image" />

                <div className="sheet-record">
                    <div className="record-basics">
                        <TagTeam this="Developer" that="Ross Davidson" address="/developers/ross-davidson" />
                        <TagTeam this="Completed" that="December 2029" />
                    </div>

                    <div className="record-links">
                        <DirectLink that="Live website" address="https://wins.dev" />
                        <DirectLink that="GitHub" address="https://github.com/winslowdev" />
                    </div>

                    <p>Privacy and security matter. Stop using hand sanitizerer. You can use this vanilla JS-based tool to generate a stronger password. If you need a password manager, I highly recommend using 1Password.</p>
                </div>
            </div>
        )
    }
}