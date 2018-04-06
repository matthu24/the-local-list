import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cities from './cities/cities_container';
import USMap from './maps/US_map_container';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import CitiesShow from './cities/cities_show';

const App = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={USMap}/>
    <Switch>
      <Route exact path="/" component={Cities}/>
      <Route exact path = "/cities/:cityId" component={CitiesShow}/>
    </Switch>
    <Route path="/" component={Footer} />


  </div>
);

export default App;
