import * as fs from "fs"
let words = fs
    .readFileSync(process.cwd() + "/src/words.txt")
    .toString()
    .split(", ")

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pickRandomWord() {
    let random = randomNumber(0, words.length - 1)
    return words[random]
}

export default {
    pickRandomWord,
}