import React from 'react';
import { Link, Route } from 'react-router-dom';

export default props => {
  let cityImage = props.city.image_url_one;
  return(
    <div>

      <Link className='city-link' to={`/cities/${props.city.id}`}>
        <div className='city-item'>
        <img className='city-image' src= {cityImage}/>
        <div className='city-name'>
          {props.city.name}
        </div>
        <div className='city-tag'>
          {props.city.tagline}

        </div>
        </div>
      </Link>
    </div>
  )
}
