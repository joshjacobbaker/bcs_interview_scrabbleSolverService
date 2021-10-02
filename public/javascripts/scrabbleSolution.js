const score = (word) => {
  const scrabbleScores = {
    1: /[AEIOULNRST]/g,

    2: /[DG]/g,

    3: /[BCMP]/g,

    4: /[FHVWY]/g,

    5: /[K]/g,

    8: /[JX]/g,

    10: /[QZ]/g,
  }

  return Object.entries(scrabbleScores).reduce((total, [points, toMatch]) => {
    const matches = word.toUpperCase().match(toMatch)
    return matches ? (total += matches.length * points) : total
  }, 0)
}

score("bcdaaa")
