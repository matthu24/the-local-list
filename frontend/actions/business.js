import {fetchBusiness} from '../utils/business';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
})

export const fetchSingleBusiness = id => dispatch => (
  fetchBusiness(id).then(business => dispatch(receiveBusiness(business)))
);
