// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'

import { Hero } from '../supplements/Snacks'


// ============================== DASHBOARD
// ============================== DASHBOARD

export function Dashboard() {
    return (
        <div id="dashboard" className="container">
            <Hero hero="Here's your dashboard. Try not to get dashbored." />

            <div className="dashboard_duos margined">
                <div className="dashboard_duo">
                    <h4>Your profile</h4>
                    <p>Update your name, location, etc.</p>
                </div>

                <div className="dashboard_duo">
                    <h4>Account settings</h4>
                    <p>Change your email address or password.</p>
                </div>

                <div className="dashboard_duo">
                    <h4>Your profile</h4>
                    <p>Update your name, location, etc.</p>
                </div>
            </div>
        </div>
    )
}