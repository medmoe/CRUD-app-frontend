import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk, deleteSingleStudentThunk } from '../../thunks';
import { AllStudentsView } from '../views';

// Smart container;
class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return <AllStudentsView allStudents={this.props.allPlayers} deleteStudent = {this.props.deleteStudent} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allPlayers: state.allPlayers
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
     deleteStudent: (studentId) => dispatch(deleteSingleStudentThunk(studentId))
  }
}

// Type check props;
AllStudentsContainer.propTypes = {
  allPlayers: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);