import React from 'react';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleBusiness(this.props.match.params.businessId)
    console.log(this.props)

  }


  render(){
    if(!this.props.business){
      return null;
    }
    return(
      <div className='business-show'>
        {this.props.business.name}
      </div>
    )
  }
}

export default BusinessShow
