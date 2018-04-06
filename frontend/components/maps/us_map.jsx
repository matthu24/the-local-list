import React from 'react';

const mapOptions = {
  center: {
    lat: 38.2876084,
    lng: -94.6806535
  }, // San Francisco coords
  zoom: 3.4,
  mapTypeId: 'terrain'
};

const SanFran = {
  lat: 37.773972,
  lng: -122.431297
}

class US_map extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

    this.props.fetchAllCities();


    const map = document.getElementById('map-container');
    this.map = new google.maps.Map(map,mapOptions);



    // var marker = new google.maps.Marker({
    // position: SanFran,
    // map: this.map,
    // title: 'San Francisco'
    // });
  }

  render(){
    let markers = [];
    let marker;
    this.props.cities.forEach(city => {
      marker = new google.maps.Marker({
      position: {lat: city.lat, lng: city.lng},
      map: this.map,
      title: city.name
      });

      markers.push(marker)
    })
    console.log(markers)
    return(
      <div className='splash'>
        <div className = 'splash-left'><span className='header'>The Local</span> List is the list you wished you had the last time you visited the likes of Seattle or New York.  It features local favorites for coffee shops, restaurants, and bars in nine of the United States' most popular cities. But these recommendations aren't necessarily here to stay..Make your own and vote away!
        </div>
        <div id='map-container'></div>

      </div>

    )
  }

}




export default US_map;
