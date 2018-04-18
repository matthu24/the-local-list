import React from 'react';


class Reviews extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //fire api call
    this.props.fetchAllReviews(this.props.businessId)

  }

  render(){
    return(
      <div>
        hi reviews
      </div>
    )
  }
}

export default Reviews;
