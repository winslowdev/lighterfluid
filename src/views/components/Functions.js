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

export const navigate = (type, address) => {
    if (type === "external") {
        window.open(address)
    } else if (type === "internal") {
        window.location.href = address
    } if (type === "mail") {
        window.open("mailto:" + address)
    }
}