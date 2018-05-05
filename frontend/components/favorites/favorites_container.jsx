import React from 'react';
import Favorites from './favorites';
import {fetchAllBusinesses} from '../../actions/business';

import {connect} from 'react-redux';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
