import React from 'react';
import {connect} from 'react-redux';

import {signup} from '../../actions/session';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
