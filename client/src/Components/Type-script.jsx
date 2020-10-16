import React, { Component } from 'react'
import Menu from './Nav'
import Typet from './typect'
export default class Typesrc extends Component {
    render() {
        return (
            <>
            <Menu/>
            <section className="data">
	<div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
    <h1>Type Script</h1>
<Typet/>
    </div>
	</div>	
	</div>
</section>         
            </>
        )
    }
}
