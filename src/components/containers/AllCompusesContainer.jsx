import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCompusesThunk, deleteCampusThunk, updateCampusThunk} from '../../thunks';
import { AllCompusesView, EditCampusView } from '../views';

// Smart container;
class AllCompusesContainer extends Component {
  constructor(){
    super();
    this.state = {
      showForm: false,
      id: '',
      name:'',
      address: '',
      description: '',
      imageURL: '',
      students: []
    }
    this.editCampus = this.editCampus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBoxChange =this.handleCheckBoxChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllCompuses();
  }  

  //update campus
  editCampus(event){
    let students = this.props.allCompuses.map(element => {
       return element['students'];
    });
    let listOfStudents = [];
    for(let i = 0; i < students.length; i++){
      listOfStudents = listOfStudents.concat(students[i]);
    }
    this.props.allCompuses.forEach(element => {
      if(element.id == event.target.name){
        let {id, name , address, description , imageURL, students} = element;
        this.setState({
          showForm: true,
          id: id,
          name: name,
          address: address,
          description: description,
          imageURL: imageURL,
          students: listOfStudents
        })
      }
    });
  }
  S
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleCheckBoxChange(event){
    console.log(event.target.name);
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({showForm: false})
    this.props.updateCampus(this.state);

  }
   render() {
      return this.state.showForm? <EditCampusView  name = {this.state.name} 
                              address= {this.state.address}
                              description={this.state.description}
                              imageURL={this.state.imageURL}
                              students={this.state.students}
                              handleChange={this.handleChange} 
                              handleSubmit={this.handleSubmit}
                              handleCheckBoxChange={this.handleCheckBoxChange}
                              />
    :
      <AllCompusesView allCompuses={this.props.allCompuses}
                            handleDelete={this.props.deleteCampus}
                            editCampus={this.editCampus} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allCompuses: state.allPlayers.allCampuses
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCompuses: () => dispatch(fetchAllCompusesThunk()),
    deleteCampus: id => dispatch(deleteCampusThunk(id)),
    updateCampus: camp => dispatch(updateCampusThunk(camp)),
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