const lettersCountFrequency = require("./lettersCountFrequency.js")
const lettersRegExp = require("./lettersRegExp.js")
const sortWordsByScore = require("./sortWordsByScore.js")

var combineWordAndCount = (arr, letters) => {
  // console.log(arr, letters)

  // Generate RegExp for letters
  var lettersCounted = lettersCountFrequency(letters)

  var regExp = lettersRegExp(lettersCounted)
  console.log(regExp)
  // Filter array with regular expression
  var matchedWords = arr.filter((value, index, array) => {
    return regExp.test(value)
  })

  // sort matched words by score
  var sortedMatchedWords = sortWordsByScore(matchedWords)
  return sortedMatchedWords
}
var output = combineWordAndCount(["abc", "a", "ab", "bb"], "adc")

console.log(output)

module.exports = combineWordAndCount

/* Count the number of instances of a letter and use regex quantity letter pattern 
"abcaba" --> ["a", "b", "c", "a", "b", "a"] --> {a: 3, b: 2, c: 1} --> /[a{3}b{2}c{1}]{1,6}\b/
*/
