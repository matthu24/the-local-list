import { RECEIVE_CITY } from '../actions/city';
import {RECEIVE_BUSINESS,RECEIVE_BUSINESSES} from '../actions/business';
import merge from 'lodash/merge';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITY:
      return merge({}, action.city.businesses);
    case RECEIVE_BUSINESS:
      return merge({},{[action.business.id]:action.business});
    case RECEIVE_BUSINESSES:
      return merge({},action.businesses);
    default:
      return state;
  }
}
