import React from 'react';
import {favoritesParser} from '../../utils/favoritesParser';

class Favorites extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllBusinesses();
  }

  render(){
    if(!this.props.businesses) return null;
    let businesses = favoritesParser(this.props.businesses,this.props.currentUser.id);
    console.log(businesses)
    return(
      <div className='favorites-container'>
        {
          businesses.map((business,id) => <div key={id}>{business.name}</div>)
        }
      </div>
    )
  }
}

export default Favorites;
