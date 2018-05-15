import React from 'react';
import { Link, Route } from 'react-router-dom';


class SearchDropdown extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.results) return null;
    console.log(this.props.results);
    return(
      <div className='search-list'>

          {
            this.props.results.map((result,id) => <Link key={id} to={`/businesses/${result.id}`}><div className='search-item'>{result.name}</div></Link>)
          }

      </div>
    )
  }
}

export default SearchDropdown;
