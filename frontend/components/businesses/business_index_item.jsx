import React from 'react';
import { Link, Route } from 'react-router-dom';


export default props => {
  let imageFile = props.business.imageFile1;
  return(
    <div className='business-index-item'>
      <img className='business-item-image' src={imageFile}/>
      <div className='business-index-item-right'>
        <div className='business-index-item-name'><Link to={`/businesses/${props.business.id}`}>{props.business.name}</Link></div>
        <div className='business-index-item-type'>{props.business.businessType}</div>
        <div className='business-index-item-description'>{props.business.description}</div>

      </div>


    </div>
  )
}
