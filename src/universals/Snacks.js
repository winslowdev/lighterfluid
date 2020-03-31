// ============================== IMPORTS

import React, { Component } from 'react'
import { determineFate, highlightPunctuation, navigate } from './Functions'
import { icons } from './Images'


// ============================== INDIVIDUAL SKILLS

export class Bullet extends Component {
    render() {
        return (
            <div className="skill-point">{this.props.skill}</div>
        )
    }
}


// ============================== DIRECT DOWNLOAD

export class DirectDownload extends Component {
    render() {
        return (
            <p className="anchorspoof important" onClick={() => { navigate(null, this.props.address) }}>{this.props.captain}</p>
        )
    }
}


// ============================== DIRECT LINK TO EXTERNAL SITES

export class TeamLeader extends Component {
    render() {
        return (
            <div className="team-leader anchorspoof" onClick={() => { navigate(null, this.props.address) }}>
                <p>{this.props.captain}</p>
                <img src={icons.externalClick} />
            </div>
        )
    }
}


// ============================== PAGE TITLE & DESCRIPTION

export class PageInformation extends Component {
    render() {
        return (
            <aside className="page-hero">
                <div className="container" id="developers">
                    <h1>{highlightPunctuation(this.props.pageTitle)}</h1>
                    <p className="page-description">{this.props.pageDescription}</p>
                </div>
            </aside>
        )
    }
}


// ============================== RECTANGULAR TILE

export class RectangleTile extends Component {
    render() {
        return (
            <div className="rectangled anchorspoof"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.rectangleHeight + 'px',
                }}
                onClick={() => { navigate(this.props.address) }}>
                <div className={`coverpiece ${this.props.gradientStyle}`}>
                    <h3>{this.props.captain}</h3>
                </div>
            </div>
        )
    }
}


// ============================== SQUARE TILE

export class SquareTile extends Component {
    render() {
        return (
            <div
                className="square-tile anchorspoof"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.square + 'px'
                }}
                onClick={() => {
                    this.props.setThisPage(this.props.address)
                    navigate("/" + this.props.address)
                }}>
                <div className={`tile-cover ${this.props.gradientColor}`}>
                    <h5>{this.props.captain}</h5>
                </div>
            </div>
        )
    }
}


// ============================== TOPIC & STATEMENT // METHOD & ADDRESS

export class Team extends Component {

    determineIfLink() {
        const operator = this.props.captain.toLowerCase()

        if (operator === "email" || "github" || "linkedin" || "twitter") {
            return true
        }
    }

    determineMethod() {
        const operator = this.props.captain.toLowerCase()

        if (operator === "github" || "linkedin" || "twitter") {
            return operator
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="team" onClick={() => { navigate(this.determineMethod(), this.props.player) }}>
                <p>{this.props.captain}</p>
                <p className={this.determineIfLink() ? 'anchorspoof' : null} >{determineFate(this.props.captain, this.props.player)} </p>
            </div>
        )
    }
}