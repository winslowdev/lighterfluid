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
            <div className="point-download anchorspoof" onClick={() => { navigate(this.props.address) }}>
                <p className="important">{this.props.title}</p>
            </div>
        )
    }
}


// ============================== DIRECT LINK TO EXTERNAL SITES

export class DirectLink extends Component {
    render() {
        return (
            <div className="point-link anchorspoof" onClick={() => { navigate(this.props.address) }}>
                <p>{this.props.title}</p>
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
                    <h3>{this.props.title}</h3>
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
                className="squared anchorspoof"
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.squareHeight + 'px',
                }}
                onClick={() => { navigate(this.props.address) }}>
                <div className={`coverpiece ${this.props.gradientStyle}`}>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}


// ============================== TOPIC & STATEMENT // METHOD & ADDRESS

export class TagTeam extends Component {

    determineIfLink() {
        const operator = this.props.title.toLowerCase()

        if (operator === "email" || "github" || "linkedin" || "twitter") {
            return true
        }
    }

    render() {
        return (
            <div className="point" onClick={() => { navigate(this.props.title, this.props.caption) }}>
                <p className="this">{this.props.title}</p>
                <p className={`that ${this.determineIfLink() ? 'anchorspoof' : null}`} >{determineFate(this.props.title, this.props.caption)} </p>
            </div>
        )
    }
}