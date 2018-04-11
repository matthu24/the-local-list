import React from 'react';

class CityMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const map = document.getElementById('city-map-container');
      this.map = new google.maps.Map(map,{
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        }, // San Francisco coords
        zoom: 10,
        mapTypeId: 'terrain'
      });
  }

  render(){
    return(
      <div className='city-map'>
        <div id='city-map-container'></div>
      </div>
    )
  }
}

export default CityMap;
