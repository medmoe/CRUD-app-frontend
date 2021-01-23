import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_ALL_COMPUSES = "FETCH_ALL_COMPUSES";
const DELETE_CAMPUS = "DELETE_CAMPUS";

// ACTION CREATORS;
const fetchAllStudents = students => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students
  }
}
const fetchAllCompuses = compuses => {
  return {
    type: FETCH_ALL_COMPUSES,
    payload: compuses
  }
}
const deleteCampus = id => {
  return {
    type: DELETE_CAMPUS,
    payload: id
  }
}

export const fetchAllStudentsThunk = () => dispatch => {
  
  return axios
  .get('http://localhost:1234/api/students')
  .then(res => res.data.students)
  .then(students => dispatch(fetchAllStudents(students)))
  .catch(err => console.log(err))
}
export const fetchAllCompusesThunk = () => dispatch => {
  return axios
  .get('http://localhost:1234/api/campuses')
  .then(res => res.data)
  .then(compuses => dispatch(fetchAllCompuses(compuses)))
  .catch(err => console.log(err))
}
export const deleteCampusThunk = id => dispatch => {
  return axios
  .delete(`http://localhost:1234/api/campuses/${id}`)
  .then(()=> dispatch(deleteCampus(id)))
  .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = [] , action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      console.log("fetch all students");
      return action.payload;
    case FETCH_ALL_COMPUSES:
      return action.payload;
      case DELETE_CAMPUS:
        return state.filter(campus => campus.id != action.payload)
    default:
      return state;
  }
}

export default reducer;
