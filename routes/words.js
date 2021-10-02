const express = require("express")
const router = express.Router()
const axios = require("axios")
const fs = require("fs")
const { promisify } = require("util")
const readFileAsync = promisify(fs.readFile)
const path = require("path")
const scrabbleSolution = require("../public/javascripts/scrabbleSolution.js")

/* GET users listing. */
router.get("/:letters", async (req, res, next) => {
  res.send("Hi")
  // Dictionary text file path
  var dictPath = path.join(__dirname, "..", "public", "dictionary.txt")
  // read the file

  const content = await readFileAsync(`${dictPath}`, { encoding: "utf8" })
    .then((contents) => {
      return contents.split("\n")
    })
    .catch((error) => {
      throw error
    })

  console.log(content)
  console.log(typeof req.params.letters)
  console.log(Array.isArray(content))
  var output = content.filter((word) => {
    return word.match()
  })
  // var output = scrabbleSolution(content, req.params.letters)
})

module.exports = router
