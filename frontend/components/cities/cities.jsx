import React from 'react';
import CitiesIndexItem from './cities_index_item';



class Cities extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
     window.scrollTo(0, 0)
    this.props.fetchAllCities();
  }

  render(){
    return(
      <div className='city-index-container'>
        <ul className = 'city-index'>
          {
            this.props.cities.map((city,id) => <CitiesIndexItem key={id} city={city}/>)
          }
        </ul>
      </div>
    )
  }
}


export default Cities;
