import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cities from './cities/cities_container';
import USMap from './maps/US_map_container';

const App = () => (
  <div>
    <USMap/>
    <Cities/>

  </div>
);

export default App;
