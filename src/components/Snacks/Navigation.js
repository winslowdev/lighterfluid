import React, { Component } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <h6 onClick={() => {{this.props.navigate("internal", "/")}}}>Lighterfluid</h6>
                <div className="navbar-menu">
                    <div className="menu-top"></div>
                    <div className="menu-middle"></div>
                    <div className="menu-bottom"></div>
                </div>
            </div>
        )
    }
}