let wordToGuess

function setWordToGuess(word) {
    wordToGuess = word
}

function getWordLength() {
    return wordToGuess.length

}

export default {
    setWordToGuess,
    getWordLength,

}
