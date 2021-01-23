import React, {Component} from 'react'


class Campusdisplay extends Component{


    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div> {this.props.image}</div>
                <div> {this.props.numberstudents}</div>
                <button className="edit"> edit </button>
                <button className="delete"> delete </button>
            </div>
        );
    }
}

export default Campusdisplay;