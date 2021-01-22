import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_Campuses = "FETCH_ALL_Campuses";

// ACTION CREATORS;
const fetchAllCompuses = campuses => {
  return {
    type: FETCH_ALL_Campuses,
    payload: campuses
  }
}

// THUNK CREATORS;
export const fetchAllcampusesThunk = () => dispatch => {
  return axios
    .get('http://localhost:8080/api/campuses') // to be checked
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCompuses(campuses)))
    .catch(err => console.log(err)) // print the errors
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_Campuses:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
