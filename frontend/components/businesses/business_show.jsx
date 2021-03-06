
import React from 'react';
import Slider from 'react-slick';
import BusinessMap from '../maps/business_map';
import Youtube from './youtube';
import Reviews from '../reviews/review_container';
import Likes from '../likes/likes';
import Popup from '../notification/notification';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    // this.goBack = this.goBack.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.createNotification = this.createNotification.bind(this);
    //the liked status should come from the redux state: if the current user has a like object that matches this business id, liked should be true;
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.fetchSingleBusiness(this.props.match.params.businessId)
    this.props.fetchAllCities();
  }

  createNotification(){
    return () => {
      NotificationManager.info('Must be signed in',' ',3000);
    }
  }

  openPopup(){
    return()=>{
      document.querySelector('.popup').style.top = '0'
      setTimeout(function(){
        document.querySelector('.popup').style.top = '-100px'

      },3000)
    }
  }



  // goBack(){
  //   this.props.history.goBack();
  // }

  render(){
    let settings = {
     dots: true,
     arrows: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplaySpeed: 5000,
     autoplay:true,
     focusOnSelect:false

   };
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
        return `!${word}`
      }else{
        return word
      }
    }).join(" ")

    let reservation = this.props.business.reservation ? 'yes' : 'no';


    let image3 = this.props.business.imageFile3;
    let image4 = this.props.business.imageFile4;
    let image5 = this.props.business.imageFile5;
    let image6 = this.props.business.imageFile6;
    let image7 = this.props.business.imageFile7;
    let image8 = this.props.business.imageFile8;

    //this.createNotification('info') to trigger the react-notification component instead of this.openPopup()

    return(
      <div className='business-show'>
        <Popup/>
        <NotificationContainer className='notification'/>


        <div className='business-name'>
          {this.props.business.name}
        </div>
        <div className='business-type'>{this.props.business.businessType}</div>
        <div className='business-likes' onClick={!this.props.currentUser ? this.openPopup() : null}>
            <Likes fetchBusiness={() => this.props.fetchSingleBusiness(this.props.match.params.businessId)}
              business={this.props.business}
              likes={this.props.business.likes}
              currentUser={this.props.currentUser}/>

        </div>
        <div className='business-show-top'>
          <BusinessMap lat={this.props.business.lat} lng={this.props.business.lng}/>
          <div className='slider-container'>
            <Slider {...settings}>
              <div>
                <img className='slider-1' src={image3}/>
              </div>
              <div>
                <img className='slider-2' src={image4}/>
              </div>
              <div>
                <img className='slider-3' src={image5}/>
              </div>
              <div>
                <img className='slider-4' src={image6}/>
              </div>
              <div>
                <img className='slider-3' src={image7}/>
              </div>
              <div>
                <img className='slider-3' src={image8}/>
              </div>
            </Slider>
          </div>
        </div>

        <div className='business-show-mid'>

          <div className='business-show-mid-left'>
            <div className='business-show-description-container'>


                <h3 className='review-author'>
                  Obsessive Local Lister
                  <div className='review-city'>San Francisco, CA</div>

                </h3>

              <div className='business-top-review'>
              {this.props.business.description}
              {this.props.business.description}
              </div>
            </div>

            <Youtube business={this.props.business.name}/>
          </div>

          <div className='business-text'>
              <div className='business-text-left'>
                <div className='business-hours'>
                  <h3>Hours</h3>
                  {hours.split('!').map((line,id) => <div key={id}>{line}</div>)}
                </div>
                <div className='business-address'>
                  <h3>Address</h3>
                  {address.split('!').map((line,id) => <div key={id}>{line}</div>)}
                </div>
                <div className='business-number'>
                  <h3>Phone</h3>
                  {this.props.business.phoneNumber}
                </div>
                <div className='business-reservation'>
                  {reservation} reservations
                </div>
                <div className='business-description'>
                  <h3>Introduction</h3>
                  {this.props.business.description}
                </div>
              </div>
            </div>


        </div>

        <div className='business-reviews'>
          <Reviews businessId={this.props.business.id}/>
        </div>

      </div>
    )
  }
}

export default BusinessShow
