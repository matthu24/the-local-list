import { RECEIVE_CITIES } from '../actions/city';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITIES:
      return merge({},action.cities)
    default:
      return state;

  }
}
