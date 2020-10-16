import React, { Component } from 'react';
import Menu from './Nav'
//import $ from 'jquery';
import Lifeb from './Lifecycleb'
class Lifecycle extends Component{
constructor(props){
    super(props)
    this.state={
        name:"Minal Kushwah"
    }
    console.log("A Construct Calling")
}
componentDidMount(){
    console.log("Component Did A Mount Calling")
}
static getDerivedStateFromProps(prop,state){
    console.log("Get Drive A Calling")
    return null
}

    render() {
        console.log("Render A Calling")
        return (
             <>
             <Menu/>
             <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Lifecycle A Method</h1> 
                <div className="clearfix"></div>
        <p><b>Name</b> : {this.state.name}</p>
        <Lifeb/>
               </div>  
              </div>
              </div>    
                 </section>
             </>
        );
    }
}
export default Lifecycle;