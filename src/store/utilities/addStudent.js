import axios from 'axios';

//action type

const ADD_STUDENT = "ADD_STUDENT";

//create the action
const addastudent = student => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}
//create a thunk
export const addStudentThunk = studentObject => {
    console.log(studentObject);
    return (dispatch) => {
        axios.post('http://localhost:1234/api/students', studentObject )
        .then( response => {
            console.log(response);
            dispatch(addastudent(response.data));
        })
        .catch( error => {
            console.log(error.message);
        })
    }
}

// Reducer 

const reducer = (state = [], action ) => {
    switch(action.type){
        case ADD_STUDENT:
            console.log("add a student");
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
