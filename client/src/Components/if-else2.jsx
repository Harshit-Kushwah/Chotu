import React, { Component } from 'react'

export default  class Log2  extends Component {
    render() {
        return (
            <>
             <p>Hello Admin</p>   
             <button type="submit" className="btn btn-warning" onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}
