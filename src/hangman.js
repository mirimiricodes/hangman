let wordToGuess
let usedLetters = []

function setWordToGuess(word) {
    wordToGuess = word
}

function getWordLength() {
    return wordToGuess.length

}
function guessLetter(letter) {
    usedLetters.push(letter)
}

function getUsedLetters() {
    return usedLetters
}

export default {
    setWordToGuess,
    getWordLength,
    guessLetter,
    getUsedLetters,

}
