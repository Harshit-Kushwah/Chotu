import React, { Component } from 'react'
import Menu from './Nav'
import Reducgetg from './Redux-getapi'
import {Provider} from 'react-redux'
import {data1} from '../Redux/Main-sell'
 class Reduxgpd extends Component {
    render() {
        return (
            <>
            <Menu/>
            <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                
                <Provider store={data1}>
                <Reducgetg/>   
                </Provider> 
               </div>  
              </div>
              </div>    
                 </section>    
            </>
        )
    }
}
export default Reduxgpd
