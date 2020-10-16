import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
export default class Apipost extends Component {
    constructor(props){
        super(props);
        this.state={
            fnm:"",age:"",city:"",    
        }
    }
    pchange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
       // console.log(this.state)
    }
    post=(e)=>{        
        e.preventDefault(); 
        $("#loader").css({"display":"flex"})
        $("#root").addClass("is_blir")  
         
     axios.post("/post",this.state)
     .then((res)=>{
     if(res.data==="Post"){

      $("#loader").removeAttr("style")
      $("#root").removeClass("is_blir")   
      console.log(this.state)
     this.setState({
         fnm:"",age:"",city:""
     }) 
     }
     else{
        throw new Error("Custom Error")
    }
     })
     .catch((err)=>{
         console.log(err)
     })
    }

    render() {
        const {fnm,age,city}=this.state
        return (
            <>
            <div className="col-xl-6">
                <h1>Api Post Mehtod</h1>
            <div className="col-md-12 p-0 mt-3" id="post-form">
             <form className="form-group" onSubmit={this.post}>
             <div className="row">
             <div className="col-xl-1">Name</div>
             <div className="col-xl-4"><input type="text" className="form-control" name="fnm" value={fnm} onChange={this.pchange}></input></div>
             </div>
             <div className="row">
             <div className="col-xl-1">Age</div>
             <div className="col-xl-4"><input type="text" className="form-control" name="age" value={age} onChange={this.pchange}></input></div>
             </div>
             <div className="row">
             <div className="col-xl-1">City</div>
             <div className="col-xl-4"><input type="text" className="form-control" name="city" value={city} onChange={this.pchange}></input></div>
             </div>
          <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-4 d-flex pl-0">
         
              <div className="col-xl-12">
                  <button type="submit" className="btn btn-primary" onClick={this.props.click}>Insert</button>
                  
                  </div> 
              </div>
              </div>    
                 </form>   
                 </div>
           </div>
  
            </>
        )
    }
}
