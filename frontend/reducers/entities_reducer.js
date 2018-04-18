import React from 'react';
import {combineReducers} from 'redux';
import citiesReducer from './cities_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
  cities: citiesReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer
});
