import React from 'react';
import {combineReducers} from 'redux';
import citiesReducer from './cities_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';
import searchesReducer from './searches_reducer';

export default combineReducers({
  cities: citiesReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  searches: searchesReducer
});
