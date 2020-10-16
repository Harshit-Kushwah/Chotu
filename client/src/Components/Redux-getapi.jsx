import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Fetchdata} from '../Redux/GPD/function'
import Reducxpost from './Redux-Post'
import Reducdel from './Redux-Del'
import Errorhandler from './Errorhandler'
 class Reducgetg extends Component {
componentDidMount(){
   this.props.Fetchdata()
}
    render() {
    const ws=this.props.min
  // console.log(ws)
        return (
            <>
            <div className="row">
<div className="col-xl-6">
<h1>Redux Centerlize Getting Data</h1>       
        {ws.map((a,b)=>{
              return <p className="mb-1" key={b}>{a.fnm}, {a.city}</p>
          })} 
          <button type="submit" onClick={this.props.Fetchdata} className="btn btn-primary">Hello</button>
</div>
<div className="col-xl-6">
    <Errorhandler>
    <Reducxpost/>
    </Errorhandler>
    </div>
    <div className="col-xl-6">
        <Errorhandler>
    <Reducdel/>
    </Errorhandler>
    </div>    
</div>
              {/* <button onClick={this.props.Fetchdata} type="submit">Click</button> */}
            </>
        )
    }
}
const statetomap=(state)=>{
    return{
        min:state.del,
        load:false,
        err:''
    }
}
const disptoprop=(dispatch)=>{
    return {
        Fetchdata:()=>dispatch(Fetchdata())
    }
}
export default connect(statetomap,disptoprop)(Reducgetg)