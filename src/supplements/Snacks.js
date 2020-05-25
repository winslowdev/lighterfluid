// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'
import { highlightPunctuation } from '../supplements/Functions'


// ============================== HERO
// ============================== HERO

export function Hero(props) {
    return (
        <div className="hero margined">
            <h1>{highlightPunctuation(`${props.hero}`)}</h1>
        </div>
    )
}