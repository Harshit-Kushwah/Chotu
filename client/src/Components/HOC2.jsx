import React, { Component } from 'react';
import Co from './HOC-Maincount'
class HOC2 extends Component {    

    render() {
        return (
            <>
           <h4>Counter {this.props.mAin}  {this.props.con2}</h4>
        <p><b>Counter :</b> {this.props.count1}</p>
        <button onClick={this.props.count2}>Increase Count</button>   
            </>
        );
    }
}

export default Co(HOC2,5);