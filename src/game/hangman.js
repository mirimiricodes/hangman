import dictionary from "./dictionary.js"

let wordToGuess = ""
let usedLetters = []
let guessedLetters = []
let wrongGuesses = 0

function initialize() {
    setWordToGuess(dictionary.pickRandomWord())
}

function setWordToGuess(word) {
    wordToGuess = word.toLowerCase()
}

function getWordLength() {
    return wordToGuess.length

}

function isALetter(letter) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(letter) && letter.length == 1
}

function safeGuessLetter(letter) {
    if (isALetter(letter)) {
        return avoidDuplicates(letter)
    }
    else {
        return "Invalid character"
    }
}

function avoidDuplicates(letter) {
    let lowercaseLetter = letter.toLowerCase()
    if (usedLetters.includes(lowercaseLetter)) {
        return "You already used this letter!"
    }
    else {
        guessLetter(letter)
    }
}

function guessLetter(letter) {
    let lowercaseLetter = letter.toLowerCase()
    usedLetters.push(lowercaseLetter)
    if (wordToGuess.includes(lowercaseLetter)) {
        guessedLetters.push(lowercaseLetter)
    }
    else {
        wrongGuesses++
    }
}

function getUsedLetters() {
    return usedLetters
}

function getGuessedLetters() {
    return guessedLetters
}

function getLetterAt(i) {
    return wordToGuess.charAt(i)
}

function wordIncludes(letter) {
    return guessedLetters.includes(letter.toLowerCase())
}

function isGameOver() {
    return wrongGuesses == 7
        || isGameWon() == true
}

function isGameWon() {
    for (const letter of wordToGuess) {
        if (!guessedLetters.includes(letter)) {
            return false
        }
    }
    return true
}

function resetGame() {
    wordToGuess = ""
    usedLetters = []
    guessedLetters = []
    wrongGuesses = 0

}

export default {
    initialize,
    setWordToGuess,
    getWordLength,
    guessLetter: safeGuessLetter,
    getUsedLetters,
    getGuessedLetters,
    getLetterAt,
    wordIncludes,
    isGameOver,
    isGameWon,
    resetGame,

}
