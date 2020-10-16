import React, { Component } from 'react';
import Menu from './Nav'
import PureComponetb from'./PureComponetb';
import Memo from './Memo'
class PureComponeta extends Component {
    constructor(props){
        super(props)
this.state={
    Name:"Gunnu",
}
            }
            componentDidMount(){
         setInterval(()=>{
            this.setState({
                Name:"Harshit Kushwah"
            })
            console.log("Reguler Componet Calling")
         },2000)
            }
    render() {
        return (
            <>
            <Menu/>
             <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Pure Com</h1>
                <div className="clearfix"></div>
        <p><b>Name</b> : {this.state.Name}</p>
<PureComponetb nam={this.state.Name}/>
<Memo nam={this.state.Name}/>
               </div>
              </div>
              </div>
                 </section>
            </>
        );
    }
}

export default PureComponeta;