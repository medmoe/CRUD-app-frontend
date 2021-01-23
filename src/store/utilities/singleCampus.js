import axios from "axios";
const FETCH_SINGLE_CAMPUS = "FETCH_CAMPUS";

const fetchSingleCampus = campus => {
    return{
        type: FETCH_SINGLE_CAMPUS,
        payload: campus
    }
}




export const fetchSingleCampusThunk = (id) => dispatch => {
  return axios
    .get(`http://localhost:1234/api/campuses/${id}`) // to be checked
    .then(res => res.data)
    .then(campus => dispatch(fetchSingleCampus(campus[0])))
    .catch(err => console.log(err)) // print the errors
}



const reducer = (state = {}, action) => {
    switch (action.type){
        case FETCH_SINGLE_CAMPUS:
            return action.payload;
        default:
            return state;

    }
}

export default reducer;