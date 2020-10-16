import React, { Component } from 'react'
//import {Cosumer} from './context'
import {Mycontext} from './context'
export default class Contexts extends Component {
    static contextType=Mycontext
    render() {
        console.log(this.context)
      const {sale,cng}=this.context
        return (
            <>
 {/*<Cosumer>
                  {({sale,cng})=><><p>Salery :{sale}</p>
                  <button type="submit" onClick={cng}>Increment</button></>
                  }</Cosumer> */}
                        {/* <p>Salery :{this.context.sale}</p>
                  <button type="submit" onClick={this.context.cng}>Increment</button> */}
            <p>Salery :{sale}</p>
                  <button type="submit" onClick={cng}>Increment</button>

            </>
        )
    }
}
