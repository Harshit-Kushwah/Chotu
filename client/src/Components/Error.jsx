import React, { Component } from 'react'
import Menu from './Nav'
class Error extends Component{
    render() {
        return (
            <>
            <Menu/>
             <div className="col-xl-12">
                 <img src={require('../Images/error.jpg')} alt="Rahul" className="img-fluid d-block mx-auto er-size"/>
                 </div>   
            </>
        );
    }
}
export default Error;