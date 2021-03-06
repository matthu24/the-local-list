import React from 'react';

export default props => {
  let recommendation = props.review.recommended ? (
    <i className="far fa-thumbs-up"></i>
  ) : (
    <i className="far fa-thumbs-down"></i>
  )
  let deleteButton = (props.currentUser && props.currentUser.id === props.review.user_id) ? (<button className='delete-button' onClick={() => props.deleteReview(props.review.id)}>Delete</button>) : (<div></div>)
  return(
    <div className='review-item'>
      <h3 className='review-author'>
        {props.review.review_author}
        <div className='review-city'>{props.review.review_city}</div>
        <div className='review-recommendation'>{recommendation}</div>

      </h3>

      <div className='review-body'>
        {props.review.body}

      </div>
      {deleteButton}
    </div>
  )
}
