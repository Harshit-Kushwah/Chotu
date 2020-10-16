import React, { Component } from 'react'
import Menu from './Nav'
import Drop from './Drop'
import {Link,Route,Switch } from 'react-router-dom'
class About extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            name:"Rahul",
            id:1,
            enam:"",easl:"",Eid:[],
            loop:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
            val:"Harshit Kushwah"
        }       
    }
 clickme=()=>{
this.setState({count:this.state.count+1})
 }
 Event=(id,e)=>{
console.log(id)
console.log(e)
 }
upval=()=>{
    this.setState({
        enam:"Harshit Kushwah",
        easl:8000000,
        Eid:1
    })
}
textupdate=(e)=>{
    this.setState({
        val:e.target.value
    })
}
    render() {
       const {match}=this.props
        const { dc } = this.props
       console.log(dc)
       console.log(match)
        const llp=this.state.loop
        return (
            <> 
            <Menu/>
            <section className="data">
	<div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
    <h1>State</h1>
    <Link to ={`${match.path}/Menu1`}>Menu Name 01</Link>
    <Link to ={`${match.path}/Menu2`} target="_blank">Menu Name 02</Link>
    <Link to ={`${match.path}/Menu3`}>Menu Name 03</Link>
    <Switch>
    <Route path={`${match.path}/:xc`} component={Drop}></Route>
    </Switch>
    <div className="clearfix"></div> 
    Name: <b>{this.state.name}</b>
    <p>Click Count: <b>{this.state.count}     
        </b></p> 
      
        <button className="btn btn-dark" onClick={this.clickme}>Click Me</button>
       
        {/* //Event Aerguments */}
        <button className="btn btn-light" onClick={(e)=>{this.Event(this.state.id,e)}}>Click EventConsole</button>
        <p className="mb-0 mt-3">Name : <b>{this.state.enam}</b></p>
        <p className="mb-0">Salary : <b>{this.state.easl}</b></p>
        <p className="mb-0 pb-1">Id : <b>{this.state.Eid}</b></p>
        <button className="btn btn-primary" onClick={this.upval}>Update</button>
{/* Map Loop */}
<ul className="pt-1">
 {llp.map((a,b)=>{
    return <li key={b}>{a}</li>
 })}   
</ul>
<div className="clearfix"></div>
<input type="text" className="mb-2" value={this.state.val} onChange={this.textupdate}></input>
    </div>
	</div>	
	</div>
</section>     
            </>
        );
    }
}
export default About;