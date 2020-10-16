import React, { Component } from 'react';
import Menu from './Nav'
import Lifebupdate from './Lifecycleb_Update'
import Errorhandler from './Errorhandler'
class Updatelifecycle extends Component{
    constructor(props){
        super(props)
        this.state={
            empid:1,
        }
        console.log("Parent Constructer Calling")
    }
    static getDerivedStateFromProps(state,prop){
        console.log("Parent Drive Calling")
        return null
    }
    updateval=()=>{
        this.setState({empid:this.state.empid+1})
   
    }
    render() {
        console.log("Parent Render Calling")
        return (
            <>
              <Menu/>
             <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Lifecycle A Update </h1> 
        <p className="mb-2">Update Parent Id {this.state.empid}</p>
        <button className="btn btn-warning mb-2" onClick={this.updateval}>Update Value</button>
               </div>  
               <div className="col-xl-12 p-0">
                   <Errorhandler>
               <Lifebupdate sd={this.state.empid}></Lifebupdate>   
               </Errorhandler>
               </div>
              </div>
              </div>    
                 </section>
             </>   
        );
    }
}
export default Updatelifecycle