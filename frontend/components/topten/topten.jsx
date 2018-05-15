import React from 'react';
import BusinessTopTenItem from '../businesses/business_topten_item';
import {likeCounter} from '../../utils/likeCounter';

class TopTen extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //need to fetch all businesses
    this.props.fetchAllBusinesses();
  }
  render(){
    //topTen should be an array of business objects
    let topTen = likeCounter(this.props.businesses);
    // console.log(topTen)
    return(
      <div className='top-ten-container'>
        <h1>
          Top Ten Businesses

        </h1>
        {topTen.map((business,id) => <BusinessTopTenItem key={id} number={id} likeCount={business[0]} business={business[1]}/>)}
      </div>
    )
  }
}

export default TopTen;
