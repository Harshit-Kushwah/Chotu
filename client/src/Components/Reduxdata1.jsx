import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sell} from '../Redux/Main-function'
 class reddt extends Component {     
    render() {       
       
       // console.log(this.props)
        return (
            <>
            <p className="mb-2"><b>Number of Book {this.props.book}</b></p>
            <button type="submit" onClick={this.props.sell} className="btn btn-light">Click Here</button> 
            
            </>
        )
    }

}
const statemap=(state)=>{
return{
    book:state.book
}
}
const dispatchmap=(dispatch)=>{
return{
    sell:()=>dispatch(sell())
    
}
}
export default connect(statemap,dispatchmap)(reddt);