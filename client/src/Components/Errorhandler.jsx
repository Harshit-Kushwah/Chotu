import React, { Component } from 'react';

class Errorhandler extends Component {
    constructor(props){
        super(props)
        this.state={
            err:false,//Flase to come
        }
    }

    //Ye wala index.jsx par call hai
    componentDidCatch(error,info){
        //console.log(error)
        console.log(info)
        this.setState({
            err:true
        })
    }
    render() {       
        if(this.state.err){            
            return <div>Error Hai Yahan Par ?</div>
        }
        return (
            <>
               {this.props.children} 
            </>
        );
    }
}

export default Errorhandler;