import React from 'react';
import TopTen from './topten';
import {connect} from 'react-redux';
import {fetchAllBusinesses} from '../../actions/business';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTen);
