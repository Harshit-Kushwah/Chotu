import React, { Component } from 'react';
import Menu from './Nav'
import Log1 from './if-else1'
import Log2 from './if-else2'
import {Provider} from './context'
import Contexts from './context-get-value'
class Ifelse extends Component {
    constructor(){
        super()
        this.state={
            log:false,
            sal:100,
        }
        this.inputtext=React.createRef();
    }
log1=()=>{
    this.setState({log:true})
}
log2=()=>{
    this.setState({log:false})
}
sub=(e)=>{
e.preventDefault()
this.inputtext.current.focus()
}
cng1=()=>{
 this.setState({sal:this.state.sal+100})
}
    render() {
        const data1=this.state.log
        const dat={
            sale:this.state.sal,
            cng:this.cng1
        }
        return (
            <>
                              <Menu/>
         <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>If/Else Condition</h1>
                <div className="clearfix"></div>
                {
data1 ? <Log2  logout={this.log2}/>: <Log1 login={this.log1}/>
                }
                <form onClick={this.sub}>
       <div className="col-xl-4">
        Name : <input type="text"></input>   
       </div>
       <div className="col-xl-4">
        Email : <input type="text" ref={this.inputtext}></input>   
       </div>
       <button type="submit">Submit</button>
       </form>
       <br></br>
 <Provider value={dat}> 
<Contexts/>
 </Provider>
                </div></div>
                </div></section>  
            </>
        );
    }
}

export default Ifelse;