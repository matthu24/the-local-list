import React from 'react';
import CityMap from '../maps/city_map';
import BusinessIndexItem from '../businesses/business_index_item';

class CitiesShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props)

    this.props.fetchSingleCity(this.props.match.params.cityId)
  }

  render(){
    if(!this.props.city){
      return null;
    }
    return(
      <div className='city-show'>
        <CityMap className='city-map' lat={this.props.city.lat} lng={this.props.city.lng}/>

        <div className='city-show-name'>The {this.props.city.name} List</div>
          <ul className='business-index'>
            {
              this.props.businesses.map((business,id) => <BusinessIndexItem key={id} business={business}/>)
            }
          </ul>
      </div>
    )
  }

}

export default CitiesShow;
