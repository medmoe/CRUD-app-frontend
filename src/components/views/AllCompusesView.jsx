import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import Campusdisplay from './Campusdisplay'

import {Link} from 'react-router-dom'

class AllCompusesView extends React.Component{
  
 
  handleDelete = (e) => {
    this.props.handleDelete(e.target.value)
  }
  render(){
    return (
      <div >
        <h1>List of All Campuses</h1>
        <Link to='/add-campus' > <button className="addButton">add a campus</button> </Link>
       <div> 
        {this.props.allCompuses.map((item) =>
          <div className="students-container"> 
           <Campusdisplay key={item.id} name={item.name} 
           image= {item.image} numberstudents= {item.numberstudents} id = {item.id}
           handleDelete={this.handleDelete}
           />
           <button className="delete" onClick={this.handleDelete} value={item.id}> delete </button>
           <button onClick={this.props.editCampus} name={item.id}>edit campus</button>
           </div>)
           
        }
       </div> 
      </div>
    );
  }
};



AllCompusesView.propTypes = {
  allCompuses: PropTypes.array.isRequired
};

export default AllCompusesView;



