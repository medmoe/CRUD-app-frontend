import axios from 'axios'

//Action types
const FETCH_SINGLESTUDENT = 'FETCH_SINGLESTUDENT'

//Action creators
const fetchSingleStudent = student => {
    return {
        type: FETCH_SINGLESTUDENT,
        payload: student
    }
}

//thunk
export const fetchSingleStudentThunk = (id) => dispatch => {

    //axios call to retrieve student by id from backend
    return axios
  .get(`http://localhost:1234/api/students/${id}`)
  .then(res => res.data)
  .then(student => dispatch(fetchSingleStudent(student[0])))
  .catch(err => console.log(err))
}

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SINGLESTUDENT:
            console.log('got student')
            return action.payload
        default:
            console.log('default')
            return state;
    }
}

export default rootReducer