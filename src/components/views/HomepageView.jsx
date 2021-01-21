import React from 'react';
import './styles/AllPlayersView.css';
import {Link} from 'react-router-dom'

const HomepageView = props => {
  return (
    <div>
    <h1> Home PAGE</h1>
     <div id="navbar"> 
      <div id="homelink">
         <Link to='/'> Home</Link>
      </div>
      <div className="campus_student_link">
        <Link to='#' id="campuses"> Campuses </Link>
        <Link to='#' id="students"> Students </Link>
      </div>
     </div>
    </div>
  );
};



export default HomepageView;