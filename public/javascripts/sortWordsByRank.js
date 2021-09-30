// const fs = require("fs")
// const path = require("path")

// sortWordsByRank
const letterValue = require("../letterValue.json")

var sortWordsByRank = (matchedWords, letterValue) => {
  // matched words are an array of words
  // ["a", "ab", "abc"]
  // convert them to an array of objects with word and score
  // split the words, match them, add points, sum points
  // [{word: "a", score: 1}, {word: "ab", score: 2}, {word: "abc", score: 3}]
  // sort array of objects
  // convert array of objects to array of strings
  // ["abc", "ab", "a"]
  console.log(letterValue[matchedWords])
}

// sortWordsByRank("W", letterValue)
module.exports = sortWordsByRank
