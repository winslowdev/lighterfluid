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

// export const navigate = (method, destination) => {
//     let operator = method != null ? method.toLowerCase() : null

//     if (operator === "github" || operator === "twitter") {
//         window.open("https://" + operator + ".com/" + destination)
//     } else if (operator === "linkedin") {
//         window.open("https://linkedin.com/in/" + destination)
//     } else if (destination.includes("@") && destination.includes(".")) {
//         window.open("mailto:" + destination)
//     } else if (destination.slice(0, 4) === "http") {
//         window.open(destination)
//     } else {
//         window.location.href = destination
//     }
// }

export const navigate = (destination) => {
    // let operator = method != null ? method.toLowerCase() : null

    // if (operator === "github" || operator === "twitter") {
    //     window.open("https://" + operator + ".com/" + destination)
    // } else if (operator === "linkedin") {
    //     window.open("https://linkedin.com/in/" + destination)
    // } else if (destination.includes("@") && destination.includes(".")) {
    //     window.open("mailto:" + destination)
    // } else if (destination.slice(0, 4) === "http") {
        // window.open(destination)
    // } else {
        window.location.href = destination
    // }
}

export const addThemeDescription = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    } else {
        return 'lighter'
    }
}