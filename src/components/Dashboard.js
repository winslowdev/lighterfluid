// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'
import { Link } from 'react-router-dom'

import { Hero } from '../supplements/Snacks'


// ============================== DASHBOARD
// ============================== DASHBOARD

export function Dashboard() {
    return (
        <div id="dashboard" className="container">
            <Hero hero="Here's your dashboard. Try not to get dashbored." />

            <div className="dashboard_duos margined">

                <Link to="/secure/profile">
                    <div className="dashboard_duo">
                        <h4>Your profile</h4>
                        <p>Update your name, location, etc.</p>
                    </div>
                </Link>

                <Link to="/secure/account">
                    <div className="dashboard_duo">
                        <h4>Account settings</h4>
                        <p>Change your email address or password.</p>
                    </div>
                </Link>

                <Link to="/secure/projects">
                    <div className="dashboard_duo">
                        <h4>Workspace</h4>
                        <p>Add or update your projects.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}