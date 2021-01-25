import React, { Component } from 'react';
import './styles/style.css';

class EditCampusView extends Component{
    render(){
        const students = this.props.students.map(element => {
            return <Student name={element['firstName'].concat(" "+element['lastName'])}  handleCheckBoxChange ={this.props.handleCheckBoxChange} isEnrolled={this.props.isEnrolled}/>
        })
        return <div className="container updateCampus">
            <form onSubmit={this.props.handleSubmit} >
                <div className="form-group">
                    <label for="nameexample">name: </label>
                    <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange} className="form-control" id="nameexample"></input> <br />
                </div>
                <label>address: </label>
                <input type="text" name="address" value={this.props.address} onChange={this.props.handleChange} className="form-control"></input> <br />
                <label>description: </label>
                <input type="text" name="description" value={this.props.description} onChange={this.props.handleChange} className="form-control"></input> <br />
                <label>imageURL: </label>
                <input type="text" name="imageURL" value={this.props.imageURL} onChange={this.props.handleChange} className="form-control"></input> <br />
                <label>students: </label>
                {students}
                <br />
                <input type="submit" className="btn btn-primary"></input>
            </form>
        </div>
    }
}
export const Student = (props) => {
    return <div className="form-check">
            <input type="checkbox" onChange={props.handleCheckBoxChange} checked={props.isEnrolled} className="form-check-input"></input>
            <p className="form-check-label">{props.name}</p>
            </div>
    
}

export default EditCampusView;