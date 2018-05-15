import {RECEIVE_SEARCH_RESULTS} from '../actions/search';
import merge from 'lodash/merge';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return merge({},action.results)
    default:
      return state;
  }
}
