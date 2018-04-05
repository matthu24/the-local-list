
import React from 'react';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-right'>
          <div className= 'logo'>The Local List<i className="fas fa-trophy"></i>

</div>
          <div className= 'top-10'>Top 10</div>
          <div className= 'overflow'>Overflow</div>
          <div className='favorites'>Favorites</div>

        </div>
        <input className = 'search' placeholder = 'search'/>
      </div>
    )
  }
}

export default NavBar
