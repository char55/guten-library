import { createAction, handleActions } from 'redux-actions'

export const getSearchResults = createAction('SEARCH_RESULTS_GET_SEARCH_RESULTS')
export const setSearchResultsFound = createAction('SEARCH_RESULTS_SET_SEARCH_RESULTS_FOUND')

const INITIAL_STATE = {
  searchResultsFound: null
}

export const searchResultsReducer = handleActions(
  {
    [setSearchResultsFound]: (state, { payload: searchResultsFound }) => ({
      ...state,
      searchResultsFound
    })
  },
  INITIAL_STATE
)

// REDUX FEATURE WIP
// incomplete
