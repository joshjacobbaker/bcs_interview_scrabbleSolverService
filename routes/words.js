const express = require("express")
const router = express.Router()
const axios = require("axios")
const fs = require("fs")
const path = require("path")
const findAllWords = require("../public/javascripts/findAllWords.js")
const sortWordsByRank = require("../public/javascripts/sortWordsByRank.js")

/* GET users listing. */
router.get("/:letters", async (req, res, next) => {
  //fetch words from API-endpoint
  // let words = await axios.get("../dictionary.txt").then((response) => {
  //   return response.data
  // })

  // console.log(words.split("\n"))
  res.send("Hi")
  // Dictionary text file path
  var dictPath = path.join(__dirname, "..", "public", "dictionary.txt")
  // read the file
  try {
    const content = fs.readFileSync(dictPath, "utf8")
    // print it
    // console.log(content.toString())
    var contentSplit = content.split("\n")
    console.log(contentSplit)
  } catch (error) {
    console.log(error)
  }

  // console.log(req.params.letters)
  // res.send(req.params.letters)
  // console.log(words.split("\n"))
  // res.send(JSON.stringify(req.params))

  var matchedWords = findAllWords(contentSplit, req.params.letters)
  var sortedWords = sortWordsByRank("W")
  console.log(sortedWords)
})

module.exports = router
