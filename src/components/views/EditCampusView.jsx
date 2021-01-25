import React, { Component } from 'react';

class EditCampusView extends Component{
    render(){
        const students = this.props.students.map(element => {
            return <Student name={element['firstName'].concat(" "+element['lastName'])}  handleCheckBoxChange ={this.props.handleCheckBoxChange} isEnrolled={this.props.isEnrolled}/>
        })
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                <label>name: </label>
                <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}></input> <br />
                <label>address: </label>
                <input type="text" name="address" value={this.props.address} onChange={this.props.handleChange}></input> <br />
                <label>description: </label>
                <input type="text" name="description" value={this.props.description} onChange={this.props.handleChange}></input> <br />
                <label>imageURL: </label>
                <input type="text" name="imageURL" value={this.props.imageURL} onChange={this.props.handleChange}></input> <br />
                <label>students: </label>
                {students}
                <input type="submit"></input>
            </form>
        </div>
    }
}
export const Student = (props) => {
    return <div>
            <p>{props.name}</p>
            <input type="checkbox" onChange={props.handleCheckBoxChange} checked={props.isEnrolled}></input>
            </div>
    
}

export default EditCampusView;