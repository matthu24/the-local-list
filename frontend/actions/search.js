import {search} from '../utils/search';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const searchDB = query => dispatch => {
  return search(query).then(results => dispatch(receiveSearchResults(results)))
}
