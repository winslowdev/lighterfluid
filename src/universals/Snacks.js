// ============================== IMPORTS
// ============================== IMPORTS

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { determineGradient, determineFate, highlightPunctuation, navigateTo } from './Functions'
import { icons, dev } from './Images'


// ============================== HEADER

export class Header extends Component {
    render() {
        const theme = this.props.theme

        // APP TITLE
        const styleheadliner = () => {
            if (this.props.home) {
                return [`headliner ${theme.headliner}`]
            } else {
                return [`headliner-fade ${theme.headlinerFade}`]
            }
        }

        // PAGE TITLE
        const stylePageTitle = () => {
            if (this.props.first) {
                return theme.hero
            } else if (this.props.second) {
                return theme.unimportant
            }
        }

        return (
            <header onClick={() => {navigateTo("internal", "/")}}>
                <h1 className={styleheadliner()}>lighterfluid</h1>
                {this.props.pageHeader ? <h3 className={stylePageTitle()}>{this.props.pageHeader}</h3> : null}
            </header>
        )
    }
}

// ============================== HERO

export class Hero extends Component {
    render() {
        return (
            <aside>
                <h6 className={`hero ${this.props.theme.hero}`}>{this.props.statement}</h6>
            </aside>
        )
    }
}


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
                <p className="accentpink">{captain}</p>
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


// ============================== RECTANGULAR PROFILE LINK

export class TileRectangle extends Component {
    render() {
        return (
            <Link
                to={`developers/${this.props.address}`}
                className={`rectangle-tile ${this.props.tileColor}`}
                style={{
                    height: this.props.metrics.rectangleHeight + 'px',
                }}>

                <div className={`tile-cover`}>
                    <img src={this.props.image} alt="profile" />

                    <div className="name-designation">
                        <h4>{this.props.name}</h4>
                        <h6 className={this.props.textColor}>{this.props.designation}</h6>
                    </div>
                </div>
            </Link>
        )
    }
}

export class RectangleLink extends Component {
    render() {
        return (
            <Link
                to={`work/${this.props.address}`}
                className="rectangle-tile"
                style={{
                    height: this.props.metrics.rectangleHeight + 'px',
                    backgroundImage: `url(${this.props.previewImage})`,
                    backgroundSize: 'cover',
                    width: '100%'
                }}>
                <div className={`tile-cover ${this.props.gradient} ${this.props.theme.genericTile}`}>
                    <h4>{this.props.name} <br />{this.props.designation}</h4>
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
                    <h4>{this.props.label}</h4>
                    {this.props.year ? <p>{this.props.year}</p> : null}
                </div>
            </Link>
        )
    }
}


// ============================== TOPIC & STATEMENT // METHOD & ADDRESS

export class Team extends Component {
    determineHref(method, address) {
        if (method === "email") {
            return "mailto:" + address
        } else if (method === "github" || "twitter") {
            return "https://" + method + ".com/" + address
        } else if (method === "linkedin") {
            return "https://linkedin.com/in/" + address
        }
    }

    render() {
        return (
            <div className="team">
                <p className={`unimportant ${this.props.theme.unimportant}`}>{this.props.captain}</p>

                {this.props.captain === ["email" || "github" || "linkedin" || "twitter"] ?
                    <a href={this.determineHref(this.props.captain, this.props.player)}>
                        <p className={`hero ${this.props.theme.hero}`}>{this.props.player}</p>
                    </a> : <p className={`hero ${this.props.theme.hero}`}>{this.props.player}</p>}
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
                <img src={icons.externalArrow} alt="external arrow" />
            </div>
        )
    }
}