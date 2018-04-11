import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/city';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITIES:
      return merge({},action.cities)
    case  RECEIVE_CITY:
      return merge({},state,{[action.city.id]:action.city})
    default:
      return state;

  }
}
