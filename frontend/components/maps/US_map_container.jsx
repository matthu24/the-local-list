import React from 'react';
import { connect } from 'react-redux';
import USMap from './us_map';
import { fetchAllCities } from '../../actions/city';


const mapStateToProps = state => ({
  cities: Object.values(state.entities.cities)
})

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities())

})

export default connect(
  mapStateToProps,mapDispatchToProps
)(USMap)
