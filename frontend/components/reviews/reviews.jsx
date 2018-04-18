import React from 'react';
import ReviewItem from './review_item';

class Reviews extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //fire api call
    this.props.fetchAllReviews(this.props.businessId)

  }

  render(){
    let businessReviews = this.props.reviews.reverse().filter(review => review.business_id === this.props.businessId)
    return(
      <div>

          {
            businessReviews.map((review,id) => <ReviewItem key={id} review = {review}/>)
          }

      </div>
    )
  }
}

export default Reviews;
