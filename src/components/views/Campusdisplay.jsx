import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Campusdisplay extends Component{
     handleDelete = (e) => {
        this.props.handleDelete(e.target.value)
    }


    render(){
        return (
            <div>
                <Link to = {`/campuses/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                <div> {this.props.image}</div>
                <div> {this.props.numberstudents}</div>
                <button className="delete" onClick={this.handleDelete} value={this.props.id}> delete </button>
            </div>
        );
    }
}

export default Campusdisplay;