import React, { Component } from 'react'
export default class Apidelete extends Component {
    constructor(props){
        super(props)
        this.state={
del:this.props.dele,
        }       
        
    }

    static getDerivedStateFromProps(prev,state){
        if(prev.dele!==state.del){
            return {del:prev.dele}
        }    
        return null
        }
shouldComponentUpdate(nextprop,nextstate){    
  // console.log(nextprop)
   return true
}

    render() {
        const delet=this.state.del        
        //console.log(this.state.del)
        return (
            <>
{delet.map((a,b)=>{
    return <form key={b}  id={a.id} onSubmit={this.props.updata}>   <div className="row mt-3">
    <div className="col-xl-3"><span>{a.fnm}</span>    
    <input type="text" style={{display:"none"}} name="fnm" className="form-control" value={this.props.fn} onChange={this.props.change} ></input>
    </div> 
    <div className="col-xl-2"><span>{a.Age}</span>
    <input type="text" style={{display:"none"}} name="age1" className="form-control" value={this.props.ag} onChange={this.props.change} ></input>
    </div> 
    <div className="col-xl-2"><span>{a.city}</span>
    <input type="text" style={{display:"none"}} name="city1" className="form-control" value={this.props.ct} onChange={this.props.change} ></input>
    </div> 
    <div className="col-xl-2">        
        <button type="submit" data-del="del" onClick={this.props.del} value={a.id} className="btn btn-danger">Delete</button>    
        <button type="submit" style={{display:"none"}}   className="btn btn-primary">Update</button> 
    </div>
    <div className="col-xl-2">
        <button type="submit" data-up="up" onClick={this.props.update} name={b} value={a.id} className="btn btn-success">Update</button>
        <button type="submit" style={{display:"none"}} onClick={this.props.cancel} value={a.id} className="btn btn-dark">Cancel</button> </div>      
     </div>
     </form>
})}
            </>
        )
    }
}
