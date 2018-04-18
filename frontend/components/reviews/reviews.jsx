import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form_container';

class Reviews extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //fire api call
    this.props.fetchAllReviews(this.props.businessId)

  }

  render(){
    let reviewForm = this.props.currentUser ? (<ReviewForm businessId={this.props.businessId}/>) : (<h1>Reviews</h1>);
    let businessReviews = this.props.reviews.reverse().filter(review => review.business_id === this.props.businessId)
    return(
      <div>
        {reviewForm}
          {
            businessReviews.map((review,id) => <ReviewItem key={id} review = {review} currentUser={this.props.currentUser} deleteReview={this.props.deleteSingleReview}/>)
          }

      </div>
    )
  }
}

export default Reviews;
