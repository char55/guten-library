import { getSearchResults, setSearchResultsFound } from './searchResults.redux'
import { fetchGutendexBookSearch } from './searchResult.io'

const getSearchResultsEpic = {
  type: getSearchResults.toString(),
  do: ({ payload: { searchInput } }) =>
    fetchGutendexBookSearch(searchInput)
      .then(res => setSearchResultsFound(res))
      .catch(err => {
        console.error(err)
        setSearchResultsFound([])
      })
}

export default [getSearchResultsEpic]

// REDUX FEATURE WIP
// incomplete
