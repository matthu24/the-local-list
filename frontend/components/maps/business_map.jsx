import React from 'react';

class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const map = document.getElementById('business-map-container');
      this.map = new google.maps.Map(map,{
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        }, // San Francisco coords
        zoom: 15,
        mapTypeId: 'terrain'
      });
  }
  render(){
    let marker = new google.maps.Marker({
    position: {lat: this.props.lat, lng: this.props.lng},
    map: this.map,

    })
    return(
      <div className='business-map'>
        <div id='business-map-container'></div>
      </div>
    )

  }
}

export default BusinessMap;
