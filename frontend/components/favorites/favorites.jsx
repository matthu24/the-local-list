import React from 'react';
import {favoritesParser} from '../../utils/favoritesParser';
import BusinessTopTenItem from '../businesses/business_topten_item';
import {likeCounter} from '../../utils/likeCounter';


class Favorites extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllBusinesses();
  }

  render(){
    if(!this.props.businesses) return null;
    //favorites parser takes businesses and userId, returns array of businesses that are liked by the input user
    let businesses = favoritesParser(this.props.businesses,this.props.currentUser.id);


    //businesses is an array of business objects
    //sort array of objects by number of likes, then only take the top 5 or whatever
    //returns [likeCount,business]
    let orderedLikes = likeCounter(businesses);

    return(
      <div className='favorites-container'>
        <h1 className='header1'>Personal Favorites</h1>
        {
          orderedLikes.map((business,id) => <BusinessTopTenItem key={id} number={id} likeCount={business[0]} business={business[1]}/>)
        }
      </div>
    )
  }
}

export default Favorites;
