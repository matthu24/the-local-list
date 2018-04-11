export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';
import { fetchCities, fetchCity } from '../utils/city';


const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
})

export const fetchAllCities = () => dispatch => (
  fetchCities().then(cities => dispatch(receiveCities(cities)))
)

export const fetchSingleCity = id => dispatch => (
  fetchCity(id).then(city => dispatch(receiveCity(city)))
)
