var countFrequencyLetters = (letters) => {
  // Split letters into array
  var splitLetters = letters.split("")

  // // Count frequency of letters within each word in our dictionary
  var countedUrlLetters = splitLetters.reduce((total, value) => {
    if (total[value] > 0) {
      total[value] = ++total[value]
    } else {
      total[value] = 1
    }
    return total
  }, {})

  return countedUrlLetters
}

module.exports = countFrequencyLetters
