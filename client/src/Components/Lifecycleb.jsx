import React, { Component } from 'react';
class Lifeb extends Component{
    constructor(props){
        super(props)
        this.state={}
        console.log("Constructor B Calling")
    }
    componentDidMount(){
        console.log("Compoent B did mount Calling")
    }   
    static getDerivedStateFromProps(prop,state){
        console.log("B Drive Calling")
        return null
    }
render() {
    console.log("B Render Calling")
    return (
        <>
         <h1>Lifecycle B Method</h1>   
        </>
    );
} 
}
export default Lifeb;