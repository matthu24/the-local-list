
import React from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-right'>
          <Link to={'/'}><div className= 'logo'>The Local List</div></Link>
          <div className= 'top-10'><i className="fas fa-trophy"></i>Top 10</div>
          <div className= 'overflow'><i class="fas fa-tint"></i>Overflow</div>
          <div className='favorites'><i class="fas fa-heart"></i>Favorites</div>

        </div>
        <input className = 'search' placeholder = 'Coffee, Food, or Bar'/>
      </div>
    )
  }
}

export default NavBar
