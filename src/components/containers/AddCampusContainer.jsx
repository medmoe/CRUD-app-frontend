import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addNewCampusThunk} from '../../thunks';
import {Link} from 'react-router-dom'

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
   console.log(this.state);
   this.props.addNewCampus(this.state)
  }

  render() {
    return (
      <div>

      <h1 className="display-3"> Add Campus Page</h1> 
      <div className="container updateCampus">
        <form onSubmit={this.handlesubmit}>
           <div className="form-group">
            <label> Name:</label> <br />
            <input name="name" value={this.state.name} placeholder="Campus name" onChange={(e)=>this.OnchageHandler(e)} className="form-control"/> 
           </div>
           <div className="form-group">
           <label> Image URL:</label> <br />
           <input name="imageUrl" value={this.state.imageUrl} placeholder="image url" onChange={(e)=>this.OnchageHandler(e)}  className="form-control"/> 
           </div>
            <div className="form-group">
              <label> Address:</label> <br />
              <input name="address" value={this.state.address} placeholder="Campus address" onChange={(e)=>this.OnchageHandler(e)}  className="form-control"/>
            </div> 
           <div className="form-group">
            <label> Description:</label> <br />
            <input name="description" value={this.state.description} placeholder="description" onChange={(e)=>this.OnchageHandler(e)}  className="form-control"/> 
           </div>
           <input type="submit" className="btn btn-primary"/>   
        </form>
      </div>
        
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