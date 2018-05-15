import React from 'react';
import {connect} from 'react-redux';
import Searches from './searches';
import {searchDB} from '../../actions/search';
import {clearResults} from '../../actions/search';

const mapStateToProps = state => ({
  results: state.entities.searches.searchResults
});

const mapDispatchToProps = dispatch => ({
  searchDB: (query) => dispatch(searchDB(query)),
  clearResults: () => dispatch(clearResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searches);
