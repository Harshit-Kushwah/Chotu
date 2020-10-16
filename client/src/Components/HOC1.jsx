import React, { Component } from 'react';
import Co from './HOC-Maincount'
class HOC1 extends Component {    
UNSAFE_componentWillMount(){
console.log("will unsafe")
}
    render() {
        return (
            <>
           <h4>Counter {this.props.mAin} {this.props.con1}</h4>
        <p><b>Counter :</b> {this.props.count1}</p>
        <button onClick={this.props.count2} className="mb-3">Increase Count</button>   
            </>
        );
    }
}

export default Co(HOC1,2);