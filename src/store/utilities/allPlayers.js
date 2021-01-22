import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_PLAYERS = "FETCH_ALL_PLAYERS";
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_ALL_COMPUSES = "FETCH_ALL_COMPUSES";

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
  const data = [
    {
      id:"1",
      firstName: "mohammed",
      lastName: "salim"
    },
    {
      id:"2",
      firstName: "karim",
      lastName: "kiki"
    }
  ]
  return dispatch(fetchAllStudents(data));
}
export const fetchAllCompusesThunk = () => dispatch => {
  const data = [
    {
      name: "brooklyn college",
      image: "someURL"
    }
  ]
  return dispatch(fetchAllCompuses(data));
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
    default:
      return state;
  }
}

export default reducer;
