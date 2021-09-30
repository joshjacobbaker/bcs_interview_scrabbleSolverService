// https://levelup.gitconnected.com/use-regex-and-javascript-to-improve-search-results-870932050d08

// match RegEx letters with dictionary
var findAllWords = (arr, letters) => {
  // Find length of letters
  var lettersLength = letters.length
  // Iterate through all combinations of letters
  var lettersCombinations = [...letters]
    .map((value, index, array) => {
      return "" + `[${array.join("")}]?` + ""
    })
    .join("")
  // console.log(new RegExp(`${lettersCombinations}`))
  // console.log(new RegExp("[abc]"))
  // create RegEx with letters -- global and case-insensitive
  var regex = new RegExp(`^${lettersCombinations}$`)
  // console.log(regex)
  // filter through elements in array for matches
  var matchedWords = arr.filter((word) => regex.test(word))
  console.log(matchedWords)
  return matchedWords
}

module.exports = findAllWords
