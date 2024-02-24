let wordToGuess = ""
let usedLetters = []
let guessedLetters = []

function setWordToGuess(word) {
    wordToGuess = word
}

function getWordLength() {
    return wordToGuess.length

}
function guessLetter(letter) {
    usedLetters.push(letter)
    if (wordToGuess.includes(letter)) {
        guessedLetters.push(letter)
    }
}

function getUsedLetters() {
    return usedLetters
}
function getGuessedLetters() {
    return guessedLetters
}

export default {
    setWordToGuess,
    getWordLength,
    guessLetter,
    getUsedLetters,
    getGuessedLetters,

}
