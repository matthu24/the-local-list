import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import {fetchSingleBusiness } from '../../actions/business';
import {fetchSingleCity} from '../../actions/city';


const mapStateToProps = (state,ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId]
});

const mapDispatchToProps = dispatch => ({
  fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
