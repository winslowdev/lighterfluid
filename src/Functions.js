// ============================== IMPORTS
// ============================== IMPORTS

import React from 'react'

// ============================== HIGHLIGHT PUNCTUATION
// ============================== HIGHLIGHT PUNCTUATION

export const highlightPunctuation = (phrase) => {
    const splitPhrase = phrase.split('')
    const highlightedPhrase = []
    let i;

    for (i = 0; i < splitPhrase.length; i++) {
        if (splitPhrase[i].match(/[!@#$%`~^&*(|)?/"'>.<,_—]/g)) {
            highlightedPhrase.push(<span className="punctuation">{splitPhrase[i]}</span>)
        } else {
            highlightedPhrase.push(splitPhrase[i])
        }
    }
    highlightedPhrase.join('')
    return highlightedPhrase
}

// ============================== RANDOMIZE
// ============================== RANDOMIZE

export const randomize = (array) => {
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array[randomIndex]
}