'use strict'
const { fetchGutendexBookSearch } = require('../services/gutendex.io')

const GetBookSearch = async (req, res) => {
  try {
    const { input, sort = 'ascending', page = '1', languages = 'fr,en' } = req.query
    // validation of query needed
    const searchResult = await fetchGutendexBookSearch(input, sort, page, languages)
    //  format results needed
    if (searchResult.count > 0) {
      return res.send(searchResult)
    }
    return res.send([])
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
}

module.exports = {
  getBookSearch: GetBookSearch
}
