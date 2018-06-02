import React from 'react';
import CityMap from '../maps/city_map';
import BusinessIndexItem from '../businesses/business_index_item';

class CitiesShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.fetchSingleCity(this.props.match.params.cityId)
  }

  render(){
    if(!this.props.city){
      return null;
    }
    let empty = true;
    for(let key in this.props.businesses){
      if(this.props.businesses[key]){
        empty = false;
      }
    }
    if(empty){
      console.log('hi')
      return(
        <div className='city-show'>
          <CityMap className='city-map' businesses={this.props.businesses} lat={this.props.city.lat} lng={this.props.city.lng}/>

          <div className='city-show-name'><img className='left-wing' src='https://s3.us-east-2.amazonaws.com/thelocallist/leftWing.png'/>  The {this.props.city.name} List <img className='left-wing' src='https://s3.us-east-2.amazonaws.com/thelocallist/rightWing.png'/></div>
            <div className='construction'>Site under construction...</div>
            <img className='city-outline' src="https://s3.us-east-2.amazonaws.com/thelocallist/CityOutline.png"/>

      </div>
      )
    }else{
    return(
      <div className='city-show'>
        <CityMap className='city-map' businesses={this.props.businesses} lat={this.props.city.lat} lng={this.props.city.lng}/>

        <div className='city-show-name'><img className='left-wing' src='https://s3.us-east-2.amazonaws.com/thelocallist/leftWing.png'/>  The {this.props.city.name} List <img className='left-wing' src='https://s3.us-east-2.amazonaws.com/thelocallist/rightWing.png'/></div>

      <div className='business-index'>
          <ul className='business-index-left'>
            {
              this.props.businesses.slice(0,5).map((business,id) => <BusinessIndexItem key={id} business={business}/>)
            }
          </ul>
          <ul className='business-index-right'>
            {
              this.props.businesses.slice(5,10).map((business,id) => <BusinessIndexItem key={id} business={business}/>)
            }
          </ul>
        </div>
      </div>
    )
  }
  }

}

export default CitiesShow;
