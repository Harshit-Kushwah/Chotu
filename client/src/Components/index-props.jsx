import React, { Component } from 'react';
import pt from 'prop-types'
class Iporps extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
             <>
            <div className="col-xl-12 p-0">
            <b>Hello </b>  {this.props.name}
        <p className="mb-0">{this.props.children}</p>
       Dogco {this.props.clas} . {this.props.children}
            </div>
             </>
        );
    }
}
Iporps.propTypes={
    name:pt.string.isRequired,
    clas:pt.string.isRequired
}
export default Iporps;