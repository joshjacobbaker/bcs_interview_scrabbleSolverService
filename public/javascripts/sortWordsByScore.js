const { promisify } = require("util")
const fs = require("fs")
const readFileAsync = promisify(fs.readFile)
const path = require("path")
const lettersCountFrequency = require("./lettersCountFrequency")

// sortWordsByRank

var sortWordsByRank = (matchedWords) => {
  // JSON file path
  var jsonPath = path.join(__dirname, "..", "letterValue.json")
  // read the file
  var letterPointsKeyValue = readFileAsync(`${jsonPath}`, { encoding: "utf8" })
    .then((contents) => {
      return JSON.parse(contents)
    })
    .catch((error) => {
      throw error
    })
  // console.log(letterPointsKeyValue)
  var countedLetters = matchedWords.map((value) => {
    return { word: `${value}`, frequency: lettersCountFrequency(value) }
  })

  var wordScore = countedLetters.map((wordFreq, idx, array) => {
    var output = Object.entries(wordFreq.frequency)

    var summedPoints = output.reduce((total, letterFreq, idx, arr) => {
      var upperCaseLetter = letterFreq[0].toUpperCase()
      var letterPointValue = letterPointsKeyValue[upperCaseLetter]
      // console.log(`word: ${wordFreq.word}, letter: ${letterFreq[0]}, points: ${letterPointValue}, frequency: ${letterFreq[1]}, total: ${total}`)
      return (total += letterPointValue * letterFreq[1])
    }, 0)
    // console.log(summedPoints)
    return { word: wordFreq.word, score: summedPoints }
  })

  // console.log(summedPoints)
  // console.log(wordScore)

  var sortedWordScore = wordScore.sort((a, b) => {
    return b.score - a.score
  })

  // console.log(sortedWordScore)

  var sortedWordScoreWords = sortedWordScore.map((obj) => obj.word)
  // console.log(sortedWordScoreWords)

  return sortedWordScoreWords

  // matched words are an array of words
  // ["a", "ab", "abc"]
  // convert them to an array of objects with word and score
  // split the words, match them, add points, sum points
  // [{word: "a", score: 1}, {word: "ab", score: 2}, {word: "abc", score: 3}]
  // sort array of objects
  // convert array of objects to array of strings
  // ["abc", "ab", "a"]
}

module.exports = sortWordsByRank
