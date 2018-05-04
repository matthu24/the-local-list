import React from 'react';

class TopTen extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //need to fetch all businesses
    this.props.fetchAllBusinesses();
  }
  render(){
    return(
      <div className='top-ten-container'>
        hi
      </div>
    )
  }
}

export default TopTen;
