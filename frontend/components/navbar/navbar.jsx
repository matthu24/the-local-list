
import React from 'react';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-right'>
          <div className= 'logo'>The Local List</div>
          <div className= 'top-10'>Top 10<i className="fas fa-trophy"></i></div>
          <div className= 'overflow'>Overflow<i class="fas fa-tint"></i></div>
          <div className='favorites'>Favorites<i class="fas fa-heart"></i></div>

        </div>
        <input className = 'search' placeholder = 'search'/>
      </div>
    )
  }
}

export default NavBar
