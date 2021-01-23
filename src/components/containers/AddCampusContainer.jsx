import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addNewCampusThunk} from '../../thunks';

// Smart container;
class AddCampusContainer extends Component {

  state ={
    name: '',
    imageUrl: '',
    address: '',
    description: ''
  }
  OnchageHandler(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handlesubmit =()=>{
   this.props.addNewCampus(this.state)
  }

  render() {
    return (
      <div className="all-students">

      <h1> Add Campus Page</h1> 
        <form onSubmit={this.handlesubmit}>
           <label> Name:</label>
           <input name="name" value={this.state.name} placeholder="Campus name" onChange={(e)=>this.OnchageHandler(e)}/> <br />
           <label> Image URL:</label>
           <input name="imageUrl" value={this.state.imageUrl} placeholder="image url" onChange={(e)=>this.OnchageHandler(e)}/> <br />
           <label> Address:</label>
           <input name="address" value={this.state.address} placeholder="Campus address" onChange={(e)=>this.OnchageHandler(e)}/> <br />
           <label> Description:</label>
           <input name="description" value={this.state.description} placeholder="description" onChange={(e)=>this.OnchageHandler(e)}/> <br />
           <input type="submit" /> 
        </form>
        
    </div>
    );
  }
}

// Map state to props;
const mapState = state => {
  return state
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    addNewCampus: (newCampus) => dispatch(addNewCampusThunk(newCampus))
  }
}

  //type checking

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);
