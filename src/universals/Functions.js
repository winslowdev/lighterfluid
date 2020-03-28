import React from 'react'

export const determineFate = (title, caption) => {
    if (title === "LinkedIn") {
        return "in/" + caption
    } else if (title === "GitHub" || title === "Twitter") {
        return "@" + caption
    } else {
        return caption
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

export const navigate = (method, destination) => {
    const operator = method.toLowerCase()

    if (method || destination === "/") {
        window.location.href = "/"
    } else if (operator === "github" || operator === "twitter") {
        window.open("https://" + operator + ".com/" + destination)
    } else if (operator === "linkedin") {
        window.open("https://linkedin.com/in/" + destination)
    } else if (destination.includes("http")) {
        window.open(destination)
    } else if (destination.includes("@") && destination.includes(".")) {
        window.open("mailto:" + destination)
    } else {
        window.location.href = destination
    }
}