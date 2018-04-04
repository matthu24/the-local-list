import React from 'react';
import CitiesIndexItem from './cities_index_item';

class Cities extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllCities();
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.cities.map((city,id) => <CitiesIndexItem key={id} city={city}/>)
          }
        </ul>
      </div>
    )
  }
}


export default Cities;
