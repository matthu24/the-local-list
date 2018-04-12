import React from 'react';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleBusiness(this.props.match.params.businessId)
  }


  goBack(){
    this.props.history.goBack();
  }

  render(){
    if(!this.props.business){
      return null;
    }
    let imageFile = this.props.business.imageFile2;
    return(
      <div className='business-show'>
        <img className='business-image' src={imageFile}/>
        <div className='business-name'>
          {this.props.business.name}
        </div>

        <div className='back' onClick={this.goBack}>back</div>
      </div>
    )
  }
}

export default BusinessShow
