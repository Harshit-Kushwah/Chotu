import React, { Component } from 'react';

class Drop extends Component {
    render() {
        const {match}=this.props
        //console.log(match)
        if(match.params.xc==="Menu1"){
        return (
            <>    
          <>
            <h2>Menu 1</h2>
        Page Called:{match.params.xc}
    </>
       
  
           </>
        );
    }
    else{
        return <> 
        <h2>Menu</h2>
    
        Page Called:{match.params.xc} </>
    }
    }
}

export default Drop;