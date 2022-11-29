import React, { useState } from 'react'
import { BookCard } from '../bookCards/BookCard'
import TextField from '@mui/material/TextField'
import { NoResults } from '../bookCards/NoResults'
import { fetchGutendexBookSearch } from '../searchResults/searchResult.io'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  searchInput: {
    padding: '15px',
    '& input': {
      'background-color': 'white'
    },
    '& button': {
      margin: '10px'
    }
  }
}))

const SearchPage = () => {
  const classes = useStyles()
  const [input, setInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState(null)

  const onSearchButtonClick = page => {
    setLoading(true)
    fetchGutendexBookSearch(input, page)
      .then(res => {
        setSearchResults(res.data)
        setCurrentPage(page)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
        setSearchResults([])
      })
  }

  return (
    <div>
      <div className={classes.searchInput}>
        <TextField
          id="outlined-basic"
          label="Search Input"
          variant="outlined"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button onClick={() => onSearchButtonClick(1)}>Click To Search</button>
      </div>
      <div className="results">
        {loading ? (
          'One moment please'
        ) : searchResults && searchResults.results.length > 0 ? (
          <div>
            {searchResults.results.map((book, i) => (
              <BookCard book={book} index={i} />
            ))}
            <div className="pagination">
              {searchResults && searchResults.count > 0 ? (
                <div>
                  <button onClick={() => onSearchButtonClick(currentPage - 1)}>previous</button>
                  page {currentPage} of {Math.round(searchResults.count / 32)}
                  <button onClick={() => onSearchButtonClick(currentPage + 1)}>next</button>
                </div>
              ) : (
                ''
              )}
            </div>
            {searchResults && `Total results found: ${searchResults.count || 0}`}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  )
}

export default SearchPage
