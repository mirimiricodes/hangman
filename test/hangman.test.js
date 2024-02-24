import * as chai from "chai"
import hangman from "./../src/hangman.js"
let expect = chai.expect
describe("Hangman", () => {
    it("should return the number of characters the word has", () => {
        hangman.setWordToGuess("tomato")
        let wordLength = hangman.getWordLength()
        expect(wordLength).to.be.equal(6)
    })
    it("should detect letters used so far", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("s")
        let usedLetters = hangman.getUsedLetters()
        expect(usedLetters).includes("s")
    })
    it("should detect good guesses", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("t")
        hangman.guessLetter("x")
        let guessedLetters = hangman.getGuessedLetters()
        expect(guessedLetters).includes("t")

    })

})
