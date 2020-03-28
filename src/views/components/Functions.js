import React from 'react'

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

export const navigate = (address) => {
    if (address.slice(0, 3) === "http") {
        window.open(address)
    } else if (address.includes("@") && address.includes(".")) {
        window.open("mailto:" + address)
    } else {
        window.open(address)
    }
}