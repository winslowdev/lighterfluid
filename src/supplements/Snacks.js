// ============================== IMPORTS
// ============================== IMPORTS

import React, { useState, useEffect } from 'react'
import { highlightPunctuation } from '../supplements/Functions'
import { colors } from '../supplements/Variables'


// ============================== HERO
// ============================== HERO

export function Hero(props) {
    return (
        <div className="hero margined">
            <h1>{highlightPunctuation(`${props.hero}`)}</h1>
        </div>
    )
}


// ============================== INTERVIEW
// ============================== INTERVIEW

export function Interview(props) {
    return (
        <div className="interview">
            <h6>{props.question}</h6>
            <p>{props.answer}</p>
        </div>
    )
}

// ============================== PROJECT SQUARE
// ============================== PROJECT SQUARE

export function ProjectSquare(props) {
    const [squareLength, setSquareLength] = useState(null)

    function correctTextColor() {
        const darkBackgrounds = [colors.black, colors.blue, colors.purple, colors.red]
        const lightBackgrounds = [colors.gold, colors.green, colors.white]

        if (darkBackgrounds.includes(props.color)) {
            return colors.white
        } else if (lightBackgrounds.includes(props.color)) {
            return colors.black
        }
    }

    useEffect(() => {
        setSquareLength(window.innerWidth / 2)

        window.addEventListener("resize", () => {
            setSquareLength(window.innerWidth / 2)
        })
    }, [])

    return (
        <div className="project-square" style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPositionX: '-150px',
            width: squareLength + 'px', height: squareLength + 'px'
        }}>
            <div className="cover" style={{
                backgroundColor: props.color }}>
                <div className="margined">
                    <h6 style={{ color: correctTextColor() }}>{props.title}</h6>
                </div>
            </div>
        </div>
    )
}

// ============================== SKILL BULLET
// ============================== SKILL BULLET

export function SkillBullet(props) {
    return (
        <div className="skill-bullet">
            <p>{props.label}</p>
        </div>
    )
}