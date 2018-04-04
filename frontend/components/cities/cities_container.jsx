import React from 'react';
import { connect } from 'react-redux';
import Cities from './cities';
import { fetchAllCities } from '../../actions/city';

const mapStateToProps = state => ({
  cities: Object.values(state.entities.cities)
})

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities())
})

export default connect(
  mapStateToProps,mapDispatchToProps
  )(Cities)
