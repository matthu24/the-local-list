
import React from 'react';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='nav-bar'>
        <div className= 'logo'>The Local List</div>
        <input className = 'search' placeholder = 'search'/>
      </div>
    )
  }
}

export default NavBar
