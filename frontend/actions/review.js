import {fetchBusinessReviews, createBusinessReview, deleteBusinessReview} from '../utils/review';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
})

export const fetchAllReviews = businessId => dispatch => (
  fetchBusinessReviews(businessId).then(reviews => dispatch(receiveReviews(reviews)))
)

export const createSingleReview = (review, businessId) => dispatch => (
  createBusinessReview(review,businessId).then(review => dispatch(receiveReview(review)))
)

export const deleteSingleReview = (reviewId) => dispatch => (
  deleteBusinessReview(reviewId).then(review => dispatch(removeReview(review)))
)
