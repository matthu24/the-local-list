import React from 'react';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleBusiness(this.props.match.params.businessId)
    this.props.fetchAllCities();
  }


  goBack(){
    this.props.history.goBack();
  }

  render(){
    if(!this.props.business){
      return null;
    }
    let imageFile = this.props.business.imageFile2;

    let hours = " " + this.props.business.hours;
    let capitalLetters = ['M','T','W','F','S'];
    //parse hours
    //add exclamation for every new line or 22 characters
    for(let i=2;i< hours.length;i++){
      if(capitalLetters.includes(hours[i])){
        let hoursArray = hours.split("");
        hoursArray[i-1] = '!';
        hours = hoursArray.join("");
      }
    }

    let address = this.props.business.address;
    //get cities array
    let cities = Object.values(this.props.cities).map(city => city.name  )
    address = address.split(' ').map(word => {
      let city = word.slice(0,word.length-1)
      if(cities.includes(city)){
        console.log('in here')
        return `!${word}`
      }else{
        return word
      }
    }).join(" ")

    let reservation = this.props.business.reservation ? 'true' : 'false';



    return(
      <div className='business-show'>
        <img className='business-image' src={imageFile}/>
        <div className='business-name'>
          {this.props.business.name}
        </div>
        <div className='business-hours'>
          {hours.split('!').map((line,id) => <div key={id}>{line}</div>)}
        </div>
        <div className='business-address'>
          {address.split('!').map((line,id) => <div key={id}>{line}</div>)}
        </div>
        <div className='business-number'>
          {this.props.business.phoneNumber}
        </div>
        <div className='business-number'>
          reservations: {reservation}
        </div>

        <div>
          map and two photos
        </div>
        <div>
          number of likes, review form + reviews
        </div>

        <div className='back' onClick={this.goBack}>back</div>
      </div>
    )
  }
}

export default BusinessShow
