import { configureStore } from '@reduxjs/toolkit'
import { searchResultsReducer } from '../modules/searchResults/searchResults.redux'

export const store = configureStore({
  reducer: {
    search: searchResultsReducer
  }
})

// REDUX FEATURE WIP
// incomplete
