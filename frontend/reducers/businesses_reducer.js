import { RECEIVE_CITY } from '../actions/city';
import merge from 'lodash/merge';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITY:
      return merge({}, action.city.businesses);
    default:
      return state;
  }
}
