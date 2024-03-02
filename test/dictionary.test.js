import * as chai from "chai"
import dictionary from "./../src/dictionary.js"
let expect = chai.expect

describe("Dictionary", () => {
    it("provides a word", () => {
        let randomWord = dictionary.pickRandomWord()
        expect(randomWord).to.be.a("string")
        expect(randomWord.length).to.be.greaterThan(0)
    })

})
