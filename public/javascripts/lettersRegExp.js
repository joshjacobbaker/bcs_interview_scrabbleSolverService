const lettersRegExp = (lettersCountObj) => {
  var entries = Object.entries(lettersCountObj)

  // Reference frequency of individual letters in base string for regexp pattern
  // {a: 3, b: 2, c: 1} --> "a{3}b{2}c{1}"
  var regExpStringLetterCount = entries.reduce((total, value, idx) => {
    total += `${value[0]}{${value[1]}}`
    return total
  }, "")

  // Sum total number of letters to limit regexp pattern matched letters
  // {a: 3, b: 2, c: 1} --> 3 + 2 + 1 --> 6
  var totalCombinedLetters = entries.reduce((total, value) => {
    total += value[1]
    return total
  }, 0)

  // Combine base pattern of individual letter frequencies and total number of letters
  // "a{3}b{2}c{1}" && 6 --> [a{3}b{2}c{1}]{1,6}
  var regExpCombined = `[${regExpStringLetterCount}]{1,${totalCombinedLetters}}\\b`

  // Create Regular Expression pattern and return it
  // [a{3}b{2}c{1}]{1,6} --> /[a{3}b{2}c{1}]{1,6}/
  var regExpObject = new RegExp(`${regExpCombined}`)

  return regExpObject
  /* Count the number of instances of a letter and use regex quantity letter pattern 
"abcaba" --> ["a", "b", "c", "a", "b", "a"] --> {a: 3, b: 2, c: 1} --> /[a{3}b{2}c{1}]{1,6}/
*/
}

module.exports = lettersRegExp
