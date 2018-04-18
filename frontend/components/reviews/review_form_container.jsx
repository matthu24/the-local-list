import React from 'react';
import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createSingleReview} from '../../actions/review';

const mapStateToProps = (state,{businessId}) => ({
  businessId
});

const mapDispatchToProps = (dispatch) => ({
  createSingleReview: (review,businessId) => dispatch(createSingleReview(review,businessId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
