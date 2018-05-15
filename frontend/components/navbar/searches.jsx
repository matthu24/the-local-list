import React from 'react';
import SearchDropdown from './search_dropdown';
class Searches extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.resetWait = this.resetWait.bind(this);
    this.state = {search:''}
  }

  handleChange(e){
    this.setState({search: e.target.value})
    //fire api call
    this.props.searchDB(this.state.search)
  }

  reset(){
    this.setState({search:''});
    this.props.clearResults();
  }

  resetWait(){
    setTimeout(() => {
      this.reset();
    },100)
  }


  render(){
    return(
      <div>
        <input onBlur={this.resetWait} value={this.state.search} onChange={this.handleChange} className = 'search' placeholder = 'Coffee, Food, or Bar'/>
          <SearchDropdown state={this.state.search} results={this.props.results}/>

    </div>
    )
  }
}

export default Searches;
