import * as chai from "chai"
import hangman from "./../src/hangman.js"
let expect = chai.expect
describe("Hangman", () => {
    afterEach(() => {
        hangman.resetGame()
    })
    it("should initialize the game", () => {
        hangman.initialize()
        expect(hangman.getWordLength()).to.be.greaterThan(0)
    })
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
    it("should end game after 7 wrong guesses", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("s")
        hangman.guessLetter("n")
        hangman.guessLetter("x")
        hangman.guessLetter("y")
        hangman.guessLetter("p")
        hangman.guessLetter("b")
        hangman.guessLetter("j")
        expect(hangman.isGameOver()).to.be.equal(true)

    })
    it("should not end game after 0 wrong guesses", () => {
        hangman.setWordToGuess("tomato")
        expect(hangman.isGameOver()).to.be.equal(false)

    })

    it("should not count turn if the letter has already been guessed", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("s")
        hangman.guessLetter("n")
        hangman.guessLetter("x")
        hangman.guessLetter("y")
        hangman.guessLetter("p")
        hangman.guessLetter("b")
        hangman.guessLetter("t")
        expect(hangman.isGameOver()).to.be.equal(false)
    })
    it("should win if the word is guessed", () => {
        hangman.setWordToGuess("tomato")
        hangman.guessLetter("t")
        hangman.guessLetter("o")
        hangman.guessLetter("m")
        hangman.guessLetter("a")
        expect(hangman.isGameOver()).to.be.equal(true)
        expect(hangman.isGameWon()).to.be.equal(true)
    })
    it("should not allow invalid character: number", () => {
        expect(hangman.guessLetter(4)).to.be.equal("Invalid character")
    })
    it("should not allow invalid character: ?", () => {
        expect(hangman.guessLetter("?")).to.be.equal("Invalid character")
    })
    it("should not allow invalid character: ab", () => {
        expect(hangman.guessLetter("ab")).to.be.equal("Invalid character")
    })
})
