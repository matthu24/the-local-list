import React from 'react';


class SearchDropdown extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.results) return null;
    console.log(this.props.results);
    return(
      <div>

          {
            this.props.results.map((result,id) => <div className='search-item' key={id}>{result.name}</div>)
          }

      </div>
    )
  }
}

export default SearchDropdown;
