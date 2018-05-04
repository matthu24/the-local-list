import React from 'react';
import BusinessIndexItem from './business_index_item';

export default props => {
  return(
    <div>
      {props.likeCount} likes
      <BusinessIndexItem business={props.business}/>
    </div>
  )


}
