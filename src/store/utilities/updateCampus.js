import axios from 'axios';

//action type
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

//create the action

const updateCampus = campus => {
    return {
        type: UPDATE_CAMPUS,
        payload: campus
    }
}

//create a thunk middleware

export const updateCampusThunk = campus => {
    console.log(campus);
    return (dispatch) => {
        axios.put(`http://localhost:1234/api/campuses/${campus.id}`, campus)
        .then( response => {
            console.log(response);
            dispatch(updateCampus(response));
        })
        .catch(error => {
            console.log(error.message);
        })
    }
}


//reducer

const reducer = (state = [], action) => {
    switch(action.type){
        case UPDATE_CAMPUS:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
