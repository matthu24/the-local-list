import React from 'react';
import {combineReducers} from 'redux';
import citiesReducer from './cities_reducer';


export default combineReducers({
  cities: citiesReducer,

});
