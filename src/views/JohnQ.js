import React, { Component } from 'react'
import { Point, PointLink } from './components/Snacks'
import { workspace, backgrounds } from './components/Images'

export class JohnQ extends Component {
    render() {
        return (
            <div id="project-sheet">
                <h1 className="sheet-title">John Q. Citizen portfolio redesign</h1>
                <img src={backgrounds.workspace} className="sheet-image" />

                <div className="sheet-record">
                    <div className="record-basics">
                        <Point this="Developer" that="Ross Davidson" address="/developers/ross-davidson" />
                        <Point this="Completed" that="December 2029" />
                    </div>

                    <div className="record-links">
                        <PointLink that="Live website" address="https://wins.dev" />
                        <PointLink that="GitHub" address="https://github.com/winslowdev" />
                    </div>

                    <p>Privacy and security matter. Stop using hand sanitizerer. You can use this vanilla JS-based tool to generate a stronger password. If you need a password manager, I highly recommend using 1Password.</p>
                </div>
            </div>
        )
    }
}