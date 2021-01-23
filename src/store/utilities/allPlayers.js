import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_PLAYERS = "FETCH_ALL_PLAYERS";
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_ALL_COMPUSES = "FETCH_ALL_COMPUSES";
const ADD_NEW_CAMPUS = "ADD_NEW_CAMPUS";

// ACTION CREATORS;
const fetchAllPlayers = players => {
  return {
    type: FETCH_ALL_PLAYERS,
    payload: players
  }
}
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

const addNewCampus = campusinfo => {
  
  return {
    type: ADD_NEW_CAMPUS,
    payload: campusinfo
  }
}

// THUNK CREATORS;
export const fetchAllPlayersThunk = () => dispatch => {
  const object = [
    {
      id:"1",
      firstName: "mohammed"
    },
    {
      id:"2",
      firstName: "karim"
    }
  ]
  return dispatch(fetchAllPlayers(object));/*axios
    .get('/api/players')
    .then(res => res.data)
    .then(players => dispatch(fetchAllPlayers(players)))
    .catch(err => console.log(err))*/
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

export const addNewCampusThunk = campusinfo => dispatch => {
  return axios.post('http://localhost:1234/api/campuses',campusinfo)
  .then(campus => dispatch(addNewCampus(campusinfo)))
}

// REDUCER;
const reducer = (state = [] , action) => {
  switch (action.type) {
    case FETCH_ALL_PLAYERS:
      return action.payload;
    case FETCH_ALL_STUDENTS:
      console.log("fetch all students");
      return action.payload;
    case FETCH_ALL_COMPUSES:
      return action.payload;
    case ADD_NEW_CAMPUS:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default reducer;
