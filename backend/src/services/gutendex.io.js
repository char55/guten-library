const { GUTENDEX_API } = require('../constants/const')
const axios = require('axios')

const fetchGutendexBookSearch = (search, sort, page, languages) =>
  axios({
    url: GUTENDEX_API,
    method: 'GET',
    params: {
      search,
      sort,
      page,
      languages
    }
  }).then(({ data }) => data)

module.exports = { fetchGutendexBookSearch }
