import React, { Component } from 'react';

class AddStudentView extends Component {
    render(){
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                <label>first name:</label>
                <input type="text" onChange={this.props.handleChange} name="firstName"></input>
                <label>last name:</label>
                <input type="text" onChange={this.props.handleChange} name="lastName"></input>
                <label>email:</label>
                <input type="email" onChange={this.props.handleChange} name="email"></input>
                <input type="submit"></input>
            </form>
        </div>
    }
}

export default AddStudentView;