
import React from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let navRight = this.props.currentUser ? (
      <div className='nav-right'>
        <Link to={'/'}><div className= 'logo'>The Local List</div></Link>
        <div className= 'top-10'><i className="fas fa-trophy"></i>Top 10</div>
        <div className= 'overflow'><i className="fas fa-tint"></i>Overflow</div>
        <div className='favorites'><i className="fas fa-heart"></i>Favorites</div>
        <div className='favorites'>Hi {this.props.currentUser.username}</div>
      </div>
    ) : (
      <div className='nav-right'>
        <Link to={'/'}><div className= 'logo'>The Local List</div></Link>
        <div className= 'top-10'><i className="fas fa-trophy"></i>Top 10</div>
        <div className= 'overflow'><i className="fas fa-tint"></i>Overflow</div>
        <div className='favorites'><i className="fas fa-heart"></i>Favorites</div>
        <Link to={'/login'}><div className='login'><i className="fas fa-key"></i>Login</div></Link>

      </div>
    )
    return(
      <div className='nav-bar'>
        {navRight}
        <input className = 'search' placeholder = 'Coffee, Food, or Bar'/>
      </div>
    )
  }
}

export default NavBar
