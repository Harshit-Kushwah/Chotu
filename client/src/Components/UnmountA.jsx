import React, { Component } from 'react'

class Unmount extends Component{
    constructor(){
        super()
        console.log("Contructor B ")
    }
    UNSAFE_componentWillMount(){
        console.log("component B Will Mount")
    }
    componentWillUnmount(){
        console.log("Componet B Unmount")
    }
    render() {
        console.log("Render B ")
        return (
            <>
           
             <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Lifecycle B Unmount </h1>  
               </div>
              </div>
              </div>    
                 </section>   
            </>
        );
    }
}
export default Unmount;