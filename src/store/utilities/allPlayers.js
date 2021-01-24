import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_ALL_COMPUSES = "FETCH_ALL_COMPUSES";
const DELETE_STUDENT = "DELETE_STUDENT";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const ADD_NEW_CAMPUS = "ADD_NEW_CAMPUS"; // add
const ADD_STUDENT = "ADD_STUDENT";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

// ACTION CREATORS;
const addastudent = student => {
  return {
      type: ADD_STUDENT,
      payload: student
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
const deleteStudent = (payload) => {
  return {
      type: DELETE_STUDENT,
      payload
  }
}
const deleteCampus = id => {
  return {
    type: DELETE_CAMPUS,
    payload: id
  }
}

//add
const addNewCampus = campusinfo => {
  
  return {
    type: ADD_NEW_CAMPUS,
    payload: campusinfo
  }
}

const updateCampus = campus => {
  return {
      type: UPDATE_CAMPUS,
      payload: campus
  }
}

//THUNK CREATORS
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

export const deleteSingleStudentThunk = id => (dispatch) => {
  console.log(`deleted student ${id}`)
  axios.delete(`http://localhost:1234/api/students/${id}`)
  .then(() =>  dispatch(deleteStudent(id)))
  .catch(error => console.log(error))

}

export const deleteCampusThunk = id => dispatch => {
  return axios
  .delete(`http://localhost:1234/api/campuses/${id}`)
  .then(()=> dispatch(deleteCampus(id)))
  .catch(err => console.log(err))
}

//add
export const addNewCampusThunk = campusinfo => dispatch => {
  return axios.post('http://localhost:1234/api/campuses',campusinfo)
  .then(campus => dispatch(addNewCampus(campusinfo)))
}

export const updateCampusThunk = campus => dispatch => {
  console.log(campus);
  return axios.put(`http://localhost:1234/api/campuses/${campus.id}`, campus)
      .then( response => {
          console.log(campus);
          dispatch(updateCampus(campus));
      })
      .catch(error => {
          console.log(error.message);
      })
}

const initialState = {
  allCampuses: [],
  allStudents: []
}

// REDUCER;
const reducer = (state = initialState , action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return {
        ...state, 
        allStudents: action.payload
      };
    case FETCH_ALL_COMPUSES:
      return {
        ...state, 
        allCampuses: action.payload
      };
    case DELETE_STUDENT:
      return {
        ...state, 
        allStudents: state.allStudents.filter((student) => student.id != action.payload)
      }
    case DELETE_CAMPUS:
      return {
        ...state, 
        allCampuses: state.allCampuses.filter(campus => campus.id != action.payload)
      }
    
    //add  
    case ADD_NEW_CAMPUS:
      return {
        ...state, 
        allCampuses: [...state.allCampuses, action.payload]
      };
    case ADD_STUDENT:
      console.log("add a student");
      return  {
        ...state, 
        allStudents: [...state.allStudents, action.payload]
      };
    case UPDATE_CAMPUS:
        return {
          ...state,
          allCampuses: state.allCampuses.map(campus => campus.id !== action.payload.id ?  campus : action.payload )
        };
    default:
      return state;
  }
}

export default reducer;
