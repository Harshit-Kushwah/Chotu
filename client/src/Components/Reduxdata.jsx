import React, { Component } from 'react'
import Menu from './Nav'
import Reddt from './Reduxdata1'
import {Provider} from 'react-redux'
import {store1} from '../Redux/Main-sell'
import ReduxHook from './ReduxHook'
export default class Reddata extends Component {
    render() {
        return (
            <>
               <Menu/>
            <section className="data">
	<div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
    <h1>Redux Data</h1>
<Provider store={store1}>
<Reddt/>
<ReduxHook/>
</Provider>
    </div>
	</div>	
	</div>
</section>      
            </>
        )
    }
}
