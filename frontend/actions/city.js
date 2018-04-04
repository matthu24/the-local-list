export const RECEIVE_CITIES = 'RECEIVE_CITIES';
import { fetchCities } from '../utils/city';

const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const fetchAllCities = () => dispatch => (
  fetchCities().then(cities => dispatch(receiveCities(cities)))
)
