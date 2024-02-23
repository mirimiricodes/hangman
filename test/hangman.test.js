import * as chai from "chai"
import hangman from "./../src/hangman.js"
let expect = chai.expect
describe("Hangman", () => {
    it("should return the number of characters the word has", () => {
        hangman.setWordToGuess("tomato")
        let wordLength = hangman.getWordLength()
        expect(wordLength).to.be.equal(6)
    })
    it("should store letters used so far", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("s")
        let usedLetters = hangman.getUsedLetters()
        expect(usedLetters).includes("s")
    })

})
