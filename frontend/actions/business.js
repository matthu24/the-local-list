import {fetchBusiness} from '../utils/business';
import {fetchBusinesses} from '../utils/business';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
})

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
})

export const fetchSingleBusiness = id => dispatch => (
  fetchBusiness(id).then(business => dispatch(receiveBusiness(business)))
);

export const fetchAllBusinesses = () => dispatch => (
  fetchBusinesses().then(businesses => dispatch(receiveBusinesses(businesses)))
)
