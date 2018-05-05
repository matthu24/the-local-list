import React from 'react';
import { Link, Route } from 'react-router-dom';

// import BusinessIndexItem from './business_index_item';

// export default props => {
//   return(
//     <div>
//       {props.likeCount} likes
//       <BusinessIndexItem business={props.business}/>
//     </div>
//   )
// }


export default props => {
  let imageFile = props.business.imageFile1;
  return(
    <div className='business-index-item'>
      <img className='business-item-image' src={imageFile}/>
      <div className='business-index-item-right'>
        {props.likeCount} likes

        <div className='business-index-item-name'><Link to={`/businesses/${props.business.id}`}>{props.business.name}</Link></div>
        <div className='business-index-item-type'>{props.business.businessType}</div>
        <div className='business-index-item-description'>{props.business.description}</div>

      </div>


    </div>
  )
}
