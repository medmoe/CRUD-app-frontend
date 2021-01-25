import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Campusdisplay extends Component{



    render(){
        return (
            <div>
                <Link to = {`/campuses/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                <div> {this.props.image}</div>
                <div> {this.props.numberstudents}</div>
                
            </div>
        );
    }
}

export default Campusdisplay;