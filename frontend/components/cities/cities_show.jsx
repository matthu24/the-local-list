import React from 'react';
import CityMap from '../maps/city_map';

class CitiesShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.match)
    //when we first navigate to city show, the single city is accessed through ownProps
    //but if we refresh the page, we need this action creator in componentDidMount to access the city again
    this.props.fetchSingleCity(this.props.match.params.cityId)
  }

  render(){
    if(!this.props.city){
      return null;
    }
    return(
      <div className='city-show'>
        <div className='city-show-name'>{this.props.city.name}</div>
        <CityMap className='city-map' lat={this.props.city.lat} lng={this.props.city.lng}/>
          <ul className='business-index'>
            {
              this.props.businesses.map(business => <li>{business.name}</li>)
            }
          </ul>
      </div>
    )
  }

}

export default CitiesShow;


//
//
