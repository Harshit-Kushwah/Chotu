import React, { PureComponent } from 'react';

class PureComponetb extends PureComponent {
    render() {
        console.log("Pure Component Calling")
        return (
           <>
<p>Name : {this.props.nam}</p>
           </>
        );
    }
}

export default PureComponetb;