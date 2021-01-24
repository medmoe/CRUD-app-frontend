import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStudentThunk, fetchAllStudentsThunk, deleteSingleStudentThunk } from '../../thunks';
import { AllStudentsView, AddStudentView } from '../views';
import { Switch } from 'react-router-dom';

// Smart container;
class AllStudentsContainer extends Component {
  constructor(){
    super();
    this.state = {
      showForm: false
    }
    this.addStudent = this.addStudent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
  componentDidMount() {
    this.props.fetchAllStudents();
  }
  //add student
  addStudent(){
    this.setState({
      showForm: true
    })
  }
  //handle form submission
  handleSubmit(event){
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      showForm: false
    })

  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if(this.state.showForm){
      return <AddStudentView handleSubmit = {this.handleSubmit}
                             handleChange = {this.handleChange} />
    }else{
      return <AllStudentsView allStudents={this.props.allPlayers}
                              addStudent={this.addStudent}
                              deleteStudent = {this.props.deleteStudent} />
    }
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
    deleteStudent: (id) => dispatch(deleteSingleStudentThunk(id)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    addStudent: (student) => dispatch(addStudentThunk(student))
    } 
  }

// Type check props;
AllStudentsContainer.propTypes = {
  allPlayers: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);