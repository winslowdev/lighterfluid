// ============================== IMPORTS

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { determineGradient, determineFate, highlightPunctuation, navigate, navigateTo } from './Functions'
import { icons, stock } from './Images'


// ============================== INDIVIDUAL SKILLS

export class Bullet extends Component {
    render() {
        return (
            <div className="skill-point">{this.props.skill}</div>
        )
    }
}

// ============================== INDIVIDUAL SKILLS

export class ContactBullet extends Component {
    render() {
        const captain = this.props.captain
        const player = this.props.player

        return (
            <div className="pseudolink contact" onClick={() => { navigateTo(captain, player) }}>
                <p className="text-hotcoralpink">{captain}</p>
                <p className={this.props.theme}>{determineFate(captain, player)}</p>
            </div>
        )
    }
}


// ============================== DIRECT DOWNLOAD

export class DirectDownload extends Component {
    render() {
        return (
            <p className="pseudolink important" onClick={() => { navigateTo(null, this.props.address) }}>{this.props.captain}</p>
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
                    height: this.props.metrics.rectangleHeight + 'px',
                }}
                onClick={() => { navigateTo(this.props.address) }}>
                <div className={`coverpiece ${this.props.gradientStyle}`}>
                    <h3>{this.props.captain}</h3>
                </div>
            </div>
        )
    }
}

// ============================== RECTANGULAR PROFILE LINK

export class RectangleProfileTile extends Component {
    render() {
        return (
            <Link
                to={`profiles/${this.props.address}`}
                className={`rectangle-tile ${this.props.bgColor}`}
                style={{
                    height: this.props.metrics.rectangleHeight + 'px',
                }}>
                {/* <h1 className={`yuge ${this.props.theme.backgroundText}`}>{this.props.address</h1> */}

                <div className={`tile-cover`}>
                    <img src={this.props.image} alt="profile image" />

                    <div className="name-designation">
                        <h5 className={this.props.theme.tileText}>{this.props.name}</h5>
                        <p className={this.props.color}>{this.props.designation}</p>
                    </div>
                </div>
            </Link>
        )
    }
}


// ============================== SQUARE TILE

export class SquareTile extends Component {
    render() {
        const image = this.props.image
        const theme = this.props.theme

        return (
            <Link
                to={`${this.props.address}`}
                className="square-tile"
                style={{
                    backgroundImage: `url(${image})`,
                    height: this.props.metrics.squareHeight + 'px'
                }}>
                <div className={`tile-cover ${determineGradient(image)}`}>
                    <h5 className={theme.tileText}>{this.props.label}</h5>
                    {this.props.year ? <p className={theme.tileText}>{this.props.year}</p> : null}
                </div>
            </Link>
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

    render() {
        return (
            <div className="team"
                onClick={() => {
                    if (this.determineIfLink() === true) {
                        navigateTo(this.props.captain, this.props.player)
                    }
                }}>
                <p>{this.props.captain}</p>
                <p className={`${this.props.theme.passiveText} ${this.determineIfLink() ? 'pseudolink' : null}`} >{determineFate(this.props.captain, this.props.player)} </p>
            </div>
        )
    }
}


// ============================== DIRECT LINK TO EXTERNAL SITES

export class TeamLeader extends Component {
    render() {
        return (
            <div className="team-leader anchorspoof" onClick={() => { navigateTo(null, this.props.address) }}>
                <p>{this.props.captain}</p>
                <img src={icons.externalClick} alt="external arrow" />
            </div>
        )
    }
}