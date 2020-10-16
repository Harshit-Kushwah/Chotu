import React, { Component } from 'react'
import Menu from './Nav'
import Iporps from './index-props'
import Ed from './ed'
import Errorhandler from './Errorhandler'
// class Header extends Component{
//     constructor(){
//         super()
//         throw new Error("Cutom Error")
//     }
//     render() {
//         return (
//             <>
//              <h3>Hello</h3>   
//             </>
//         );
//     }
// }
class Aboutme extends Component{
    constructor(props){
super(props);
this.state={
dc:"This Value for Child Dogco",
pa:"Harshit Kushwah",
cc:"This is second testing",
}
console.log("Contructor A ")
    }
    UNSAFE_componentWillMount(){
        console.log("component A Will Mount")
    }
    componentWillUnmount(){
        console.log("Componet A Unmount")
    }
    render() {
        console.log("Render A ")
        return (
        <>
		<Menu/>
      
<section className="data">
	<div className="container-fluid gap">
<div className="row">
                            <div className="col-xl-12 p-0"><h1>Props  <Ed /></h1></div>
    <div className="clearfix"></div>   
                           
    <p className="mb-0">This Value from Parent Props {this.state.pa}</p>
    <Iporps name={this.state.dc} clas={this.state.cc}>Hi this is Props children </Iporps>

    <Errorhandler>    
    </Errorhandler>
	</div>	
	</div>
</section>
        </>
        )
    }
}

export default Aboutme;