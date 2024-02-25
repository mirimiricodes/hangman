let wordToGuess = ""
let usedLetters = []
let guessedLetters = []
let wrongGuesses = 0

function setWordToGuess(word) {
    wordToGuess = word
}

function getWordLength() {
    return wordToGuess.length

}
function isALetter(letter) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(letter)

}

function safeGuessLetter(letter) {
    if (isALetter(letter)) {
        guessLetter(letter)
    }
    else {
        return "Invalid character"
    }
}
function guessLetter(letter) {
    usedLetters.push(letter)
    if (wordToGuess.includes(letter)) {
        guessedLetters.push(letter)
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
    setWordToGuess,
    getWordLength,
    guessLetter: safeGuessLetter,
    getUsedLetters,
    getGuessedLetters,
    isGameOver,
    isGameWon,
    resetGame,

}
