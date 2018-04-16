import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout, clearErrors } from '../../actions/session';

//state.session essentially points to session reducer
//session has a currentUser key
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
