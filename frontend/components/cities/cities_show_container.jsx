import React from 'react';
import {connect} from 'react-redux';
import CitiesShow from './cities_show';
import {fetchSingleCity} from '../../actions/city';
//cityId matches the route path designated in app.jsx for city show
const mapStateToProps = (state,ownProps) => ({
  city: state.entities.cities[ownProps.match.params.cityId],
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCity: (id) => dispatch(fetchSingleCity(id))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesShow);
