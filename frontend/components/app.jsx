import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cities from './cities/cities_container';
import USMap from './maps/US_map_container';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';

const App = () => (
  <div>
    <NavBar/>
    <USMap/>
    <Cities/>
    <Footer/>

  </div>
);

export default App;
