import * as chai from "chai"
import hangman from "./../src/hangman.js"
let expect = chai.expect
describe("Hangman", () => {
    it("should return the number of characters the word has", () => {
        hangman.setWordToGuess("tomato")
        let wordLength = hangman.getWordLength()
        expect(wordLength).to.be.equal(6)
    })

})
