import React from 'react'
import { stock } from './Images'

export const addThemeDescription = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    } else {
        return 'lighter'
    }
}

export const determineGradient = (image) => {
    switch (image) {
        case stock.bixbyBridge:
            return "blue--green"
            break;
        case stock.hollywoodSign:
            return "orange-teal-blue"
            break;
        case stock.goldenGate:
            return "blue--yellow"
            break;
            case stock.elCapitan:
            return "blue--red"
            break;
        default:
            return null
    }
}

export const determineFate = (captain, player) => {
    const newCaptain = captain.toLowerCase()

    if (newCaptain === "linkedIn") {
        return "in/" + player
    } else if (newCaptain === "twitter" || newCaptain === "github") {
        return "@" + player
    } else {
        return player
    }
}

export const navigateTo = (captain, player) => {
    const newCaptain = captain.toLowerCase()

    if (newCaptain === "email") {
        window.open("mailto:" + player)
    } else if (newCaptain === "linkedin") {
        window.open("https://linkedin.com/in/" + player)
    } else if (newCaptain === "twitter" || newCaptain === "github") {
        window.open("https://" + newCaptain + ".com/" + player)
    } else if (newCaptain === "internal") {
        window.location.href = player
    } else {
        window.open("https://" + player)
    }
}

export const highlightPunctuation = (phrase) => {
    const splitPhrase = phrase.split('')
    const highlightedPhrase = []
    let i;

    for (i = 0; i < splitPhrase.length; i++) {
        if (splitPhrase[i].match(/[!@#$%`~^&*(|)?/"'>.<,_—]/g)) {
            highlightedPhrase.push(<span className="punc">{splitPhrase[i]}</span>)
        } else {
            highlightedPhrase.push(splitPhrase[i])
        }
    }
    highlightedPhrase.join('')
    return highlightedPhrase
}