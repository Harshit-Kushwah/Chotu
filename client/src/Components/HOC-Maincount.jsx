import React, { Component } from 'react';

const Co=(Coun,val)=>{
class newCo extends Component{ 
        state={
            count:0
    }    
    con=()=>{
        this.setState({
            count:this.state.count+val
        })
    }
    render() {
        return (
            <>
             <Coun mAin="Main"
             {...this.props}
             count1={this.state.count}
             count2={this.con}
             />   
            </>
        );
    }
}
return newCo
}
export default Co