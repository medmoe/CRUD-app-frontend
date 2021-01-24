import React, { Component } from 'react';

class EditCampusView extends Component{
    render(){
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                <label>name: </label>
                <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}></input>
                <label>address: </label>
                <input type="text" name="address" value={this.props.address} onChange={this.props.handleChange}></input>
                <label>description: </label>
                <input type="text" name="description" value={this.props.description} onChange={this.props.handleChange}></input>
                <label>imageURL: </label>
                <input type="text" name="imageURL" value={this.props.imageURL} onChange={this.props.handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    }
}

export default EditCampusView;