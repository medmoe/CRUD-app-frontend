import axios from 'axios'

//Action types
const FETCH_SINGLESTUDENT = 'FETCH_SINGLESTUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

//Action creators
const fetchSingleStudent = student => {
    return {
        type: FETCH_SINGLESTUDENT,
        payload: student
    }
}

const updateSingleStudent = newStudent => {
    return {
        type: UPDATE_STUDENT,
        payload: newStudent
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

export const updateSingleStudentThunk = studentObj => dispatch => {
    return axios
    .put(`http://localhost:1234/api/students/${studentObj.id}`, studentObj)
    .then(newStudent => {
        return dispatch(updateSingleStudent(newStudent.data.student))
    })
}

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SINGLESTUDENT:
            console.log('got student')
            return action.payload
        case UPDATE_STUDENT:
            return action.payload
        default:
            return state;
    }
}

export default rootReducer