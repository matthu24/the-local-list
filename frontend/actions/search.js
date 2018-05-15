import {search} from '../utils/search';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS  = 'CLEAR_SEARCH_RESULTS';

const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
})

export const clearResults = () => dispatch => {
  dispatch(clearSearchResults())
}

export const searchDB = query => dispatch => {
  return search(query).then(results => dispatch(receiveSearchResults(results)))
}
