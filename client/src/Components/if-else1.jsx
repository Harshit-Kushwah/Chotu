import React, { Component } from 'react'

export default  class Log1  extends Component {

    render() {
        const styYle={
            backgroundColor:"red"
        }
        const styYle1={
            color:'#fff'
        }
        return (
            <>
             <p>Hello Login</p>   
             <button type="submit" className="btn btn-warning" style={{...styYle,...styYle1}} onClick={this.props.login}>Login</button>
            </>
        )
    }
}
