import React from 'react';



class Searches extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:''}
  }

  handleChange(e){
    this.setState({search: e.target.value})
    //fire api call
    this.props.searchDB(this.state.search)
  }


  render(){
    return(
      <div>
        <input value={this.state.search} onChange={this.handleChange} className = 'search' placeholder = 'Coffee, Food, or Bar'/>
      </div>
    )
  }
}

export default Searches;
