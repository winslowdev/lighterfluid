import React, { Component } from 'react'
import { highlightPunctuation, navigate } from './Functions'
import { icons } from './Images'

export class ContactMethod extends Component {
    render() {
        return (
            <div className="team"
                onClick={() => {
                    this.props.visible ? navigate(this.props.addressType, this.props.address) : this.props.toggleContactMethod(this.props.method)
                }}>
                <div className={`iconic ${this.props.visible ? 'partial' : 'full'}`}><img src={this.props.icon} alt={this.props.iconAlt} /></div>
                {this.props.visible ? <div className="reach-out">{this.props.reach}</div> : null}
            </div>
        )
    }
}

// PAGE TITLE, PAGE DESCRIPTION
export class HeaderInformation extends Component {
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

export class RectangleTile extends Component {
    render() {
        return (
            <div className="rectangled"
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

export class SkillPoint extends Component {
    render() {
        return (
            <div className="skill-point">{this.props.skill}</div>
        )
    }
}

export class SquareTile extends Component {
    render() {
        return (
            <div
                className="squared"
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



export class Point extends Component {
    render() {
        return (
            <div className="point" onClick={() => { navigate(this.props.type, this.props.address)}}>
                <p className="this">{this.props.this}</p>
                <p className={`that ${this.props.address ? 'cursor' : null}`} >{this.props.that}</p>
            </div>
        )
    }
}

export class PointLink extends Component {
    render() {
        return (
            <div className="point-link cursor" onClick={() => { navigate(this.props.address )}}>
                <p>{this.props.that}</p>
                <img src={icons.externalClick} />
            </div>
        )
    }
}