import React, { Component } from 'react';
class Lifebupdate extends Component{
    constructor(props){
        super(props)
        this.state={
            emp:this.props.sd
        }
        console.log("Constructor B Calling")
    }

    static getDerivedStateFromProps(prop,state){
        console.log(prop,state)
        if(prop.sd!==state.emp){
            return {emp:prop.sd}
        }
        return null
    }
    shouldComponentUpdate(nextprop,nextstate){
console.log("B Should Calling")
console.log(nextprop,nextstate)
if(nextstate.emp>=4){
    throw new Error ("Guddu Ki Gun")
}
return true
    }
    //This function call with componentDidUpdate
getSnapshotBeforeUpdate(prevprop,prevstate){
    console.log("B Get snapshot Calling")
    return prevprop
}

componentDidUpdate(prevprop,prevstate,snapshot){
    console.log("B componentDidUpdate")
    console.log(prevprop,prevstate,snapshot)
}
render() {
    console.log("B Render Calling")
    return (
        <>
         <h1>Lifecycle B Method</h1>
         <p className="mb-2">Update Child Id {this.state.emp}</p>
        </>
    );
} 
}
export default Lifebupdate;