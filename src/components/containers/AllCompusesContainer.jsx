import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCompusesThunk, deleteCampusThunk} from '../../thunks';
import { AllCompusesView } from '../views';

// Smart container;
class AllCompusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCompuses();
  }

  

  render() {
    return <AllCompusesView allCompuses={this.props.allCompuses}
                            handleDelete={this.props.deleteCampus} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allCompuses: state.allPlayers
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCompuses: () => dispatch(fetchAllCompusesThunk()),
    deleteCampus: id => dispatch(deleteCampusThunk(id))
  }
}

// Type check props;
AllCompusesContainer.propTypes = {
  allCompuses: PropTypes.array.isRequired,
  fetchAllCompuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCompusesContainer);