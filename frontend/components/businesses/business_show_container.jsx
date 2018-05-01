import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import {fetchSingleBusiness } from '../../actions/business';
import {fetchSingleCity} from '../../actions/city';
import { fetchAllCities } from '../../actions/city';


const mapStateToProps = (state,ownProps) => ({
  //current user 
  business: state.entities.businesses[ownProps.match.params.businessId],
  cities: state.entities.cities
});

const mapDispatchToProps = dispatch => ({
  fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
  fetchAllCities: () => dispatch(fetchAllCities())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
