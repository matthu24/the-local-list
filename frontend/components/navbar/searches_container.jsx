import React from 'react';
import {connect} from 'react-redux';
import Searches from './searches';
import {searchDB} from '../../actions/search';

const mapStateToProps = state => ({
  results: state.entities.searches.searchResults
});

const mapDispatchToProps = dispatch => ({
  searchDB: (query) => dispatch(searchDB(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searches);
