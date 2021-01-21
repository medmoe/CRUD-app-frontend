import React from 'react';
import './styles/AllPlayersView.css';
import {Link} from 'react-router-dom'

const HomepageView = props => {
  return (
    <div>
    <h1> New Campus Form </h1>
     <div id="navbar"> 
      <div id="homelink">
         <Link to='/'> Home</Link>
      </div>
      <div className="campus_student_link">
        <Link to='#' id="campuses"> Campuses </Link>
        <Link to='#' id="students"> Students </Link>
      </div>
     </div>
     <div id="searchfield">
        <h3> Campus Name</h3>
        <input  name='' value='' placeholder='campus name' /> <br/>
        <button> Add Campus</button>
     </div>
    </div>
  );
};



export default HomepageView;