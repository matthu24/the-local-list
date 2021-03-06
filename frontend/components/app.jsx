import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cities from './cities/cities_container';
import USMap from './maps/US_map_container';
import NavBar from './navbar/navbar_container';
import Footer from './footer/footer';
import CitiesShow from './cities/cities_show_container';
import BusinessShow from './businesses/business_show_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import TopTen from './topten/topten_container';
import FavoritesContainer from './favorites/favorites_container';

const App = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={USMap}/>
    <Switch>
      <Route path="/guest" component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer}/>
      <Route exact path="/" component={Cities}/>
      <Route exact path = "/cities/:cityId" component={CitiesShow}/>
      <Route exact path = "/businesses/:businessId" component={BusinessShow}/>
      <Route exact path = "/topten" component={TopTen}/>
      <Route exact path = "/favorites" component={FavoritesContainer} />
    </Switch>
    <Route path="/" component={Footer} />


  </div>
);

export default App;
