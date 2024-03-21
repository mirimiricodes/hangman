import readline from "readline-sync"
import hangman from "./game/hangman.js"

console.log("Welcome to Mirimiri's hangman!")
console.log()
readline.question("Press enter to start a new game.")

hangman.initialize()

function showHiddenWord() {
    let wordLength = hangman.getWordLength()
    let hiddenWord = ""
    for (let i = 0; i < wordLength; i++) {
        let letter = hangman.getLetterAt(i)
        if (hangman.wordIncludes(letter)) {
            hiddenWord = hiddenWord.concat(`${letter.toUpperCase()} `)
        }
        else {
            hiddenWord = hiddenWord.concat("_ ")
        }
    }
    console.log(hiddenWord)
    console.log()
}

function showUsedLetters() {
    let usedLetters = hangman.getUsedLetters()
    console.log(
        "You already used these letters: " +
        usedLetters.join(", ").toUpperCase() +
        "\n"
    )

}

function showTurnsLeft() {

}

function showGameOver() {
    console.log("Game Over")
}

function showScreen() {
    console.log()
    console.log("Guess the word!")
    console.log()
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



