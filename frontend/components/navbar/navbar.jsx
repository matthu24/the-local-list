
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Searches from './searches_container';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let navRight = this.props.currentUser ? (
      <div className='nav-right'>
        <Link to={'/'}><div className= 'logo'>The Local List</div></Link>
        <Link to={'/topten'}><div className= 'top-10'><i className="fas fa-trophy"></i>Top 10</div></Link>
        <div className= 'overflow'><i className="fas fa-tint"></i>Overflow</div>
        <Link to={'/favorites'}><div className='favorites'><i className="fas fa-heart"></i>Favorites</div></Link>
        <Link to={'/'}><div className='logout' onClick={() => {this.props.logout()}}><i className="fas fa-key"></i>Logout</div></Link>
          <div className='greeting'><i className="fas fa-handshake"></i>{this.props.currentUser.username}</div>

      </div>
    ) : (
      <div className='nav-right'>
        <Link to={'/'}><div className= 'logo'>The Local List</div></Link>
        <Link to={'/topten'}><div className= 'top-10'><i className="fas fa-trophy"></i>Top 10</div></Link>
        <div className= 'overflow'><i className="fas fa-tint"></i>Overflow</div>
        <Link to={'/login'}><div className='login'><i className="fas fa-key"></i>Login</div></Link>

      </div>
    )
    return(
      <div className='nav-bar'>
        {navRight}
        <Searches/>
      </div>
    )
  }
}

export default NavBar
