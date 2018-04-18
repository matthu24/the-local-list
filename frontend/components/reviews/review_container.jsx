import React from 'react';
import {connect} from 'react-redux';
import Reviews from './reviews';
import {fetchAllReviews, deleteSingleReview} from '../../actions/review'

const mapStateToProps = (state,{businessId}) => ({
  reviews: Object.values(state.entities.reviews),
  currentUser: state.session.currentUser,
  businessId
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
  deleteSingleReview: (reviewId) => dispatch(deleteSingleReview(reviewId))

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
