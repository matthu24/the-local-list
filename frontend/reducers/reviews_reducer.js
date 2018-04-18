import {RECEIVE_REVIEWS,RECEIVE_REVIEW,REMOVE_REVIEW} from '../actions/review';
import merge from 'lodash/merge';

export default (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEWS:
      return merge({},action.reviews)
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]:action.review})
    case REMOVE_REVIEW:
      let newState = merge({},state);
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
}
