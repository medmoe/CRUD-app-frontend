import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import Campusdisplay from './Campusdisplay'

class AllCompusesView extends React.Component{
  
 
  handleDelete= id => {
    this.props.handleDelete(id);
  }
  render(){
    return (
      <div className="all-students">
        {this.props.allCompuses.map((item) => 
           <Campusdisplay key={item.id} name={item.name} 
           image= {item.image} numberstudents= {item.numberstudents} id = {item.id}
           handleDelete={this.handleDelete}
           />)
           
        }
      </div>
    );
  }
};



AllCompusesView.propTypes = {
  allCompuses: PropTypes.array.isRequired
};

export default AllCompusesView;



