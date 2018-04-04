import React from 'react';

export default props => {
  let cityImage = props.city.image_url_one;
  return(
    <div className='city-item'>
      <img className='city-image' src= {cityImage}/>
      <div className='city-name'>
        {props.city.name}
      </div>
      <div className='city-tag'>
        {props.city.tagline}

      </div>

    </div>
  )
}
