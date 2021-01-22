import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import {fetchAllcampusesThunk} from '../../thunks';
import { AllCampusesView } from '../views';

// Smart container;
class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCompuses();
  }

  render() {
    return <AllCampusesView allCampuses={this.props.allCampuses} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allCampuses: state.allCampuses
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllcampusesThunk())
  }
}

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);