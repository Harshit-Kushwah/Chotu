import React, { Component } from 'react';
import Menu from './Nav'
import HOC1 from './HOC1'
import HOC2 from './HOC2'
class HOC extends Component {
    render() {
        
        return (
            <>
                              <Menu/>
         <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>HOC Method</h1>
                <React.StrictMode>
                <HOC1 con1="A"/> 
                </React.StrictMode>            
                <HOC2 con2="B"/>
                </div></div></div></section>  
            </>
        );
    }
}

export default HOC;