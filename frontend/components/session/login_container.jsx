import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
