import React, { Component } from 'react';
import './styles/style.css';
class AddStudentView extends Component {
    render(){
        return <div className="updateCampus container">
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label>first name:</label>
                    <input type="text" onChange={this.props.handleChange} name="firstName" className="form-control"></input>
                </div>
                
                <div className="form-group">
                    <label>last name:</label>
                    <input type="text" onChange={this.props.handleChange} name="lastName" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>email:</label>
                    <input type="email" onChange={this.props.handleChange} name="email" className="form-control"></input>
                </div>
                <input type="submit" className="btn btn-primary"></input>
            </form>
        </div>
    }
}

export default AddStudentView;