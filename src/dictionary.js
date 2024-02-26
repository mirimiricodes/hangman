import * as fs from "fs"
let words = fs.readFileSync(process.cwd() + "/src/words.txt").toString()

function pickRandomWord() {

}

export default {
    pickRandomWord,
}