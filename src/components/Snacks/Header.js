import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <h6 onClick={() => { { this.props.navigate("internal", "/") } }}>Lighterfluid</h6>
                    <div className="navbar-menu"
                    onClick={() => { { this.props.toggleNavbar() } }}>
                        <div className="menu-top"></div>
                        <div className="menu-middle"></div>
                        <div className="menu-bottom"></div>
                    </div>
                </div>
            </header>
        )
    }
}