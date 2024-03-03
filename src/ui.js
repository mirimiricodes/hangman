import readline from "readline-sync"
import hangman from "./game/hangman.js"

console.log("Welcome to Mirimiri's hangman!")
readline.question("Press enter to start a new game.")

hangman.initialize()

function showHiddenWord() {
    let wordLength = hangman.getWordLength()
    let hiddenWord = ""
    for (let i = 0; i < wordLength; i++) {
        hiddenWord = hiddenWord.concat("_ ")
    }
    console.log(hiddenWord)

}

function showUsedLetters() {

}

function showTurnsLeft() {

}

function showGameOver() {

}

function showScreen() {
    console.log("Guess the word!")
    showHiddenWord()
    showUsedLetters()
    showTurnsLeft()
    let letter = readline.question("Press a letter!")
    hangman.guessLetter(letter)
}
while (!hangman.isGameOver()) {
    showScreen()
}
showGameOver()



