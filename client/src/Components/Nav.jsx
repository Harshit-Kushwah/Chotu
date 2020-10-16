import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Menu extends Component{
    
    render() {
        return (
            <div className="container-fluid nav1">
            <div className="row">
                <span>React Dev Test</span>
            <ul className="nav">
                <li><Link to='/'>Props & Types</Link></li>
                <li><Link to ='/Hello'>States</Link></li>  
                <li><Link to ='/Life'>Life Cycle Mount</Link></li> 
                <li><Link to ='/Update-Mount'>Update Mount</Link></li> 
                <li><Link to ='/Pure-componet'>Pure Com & Memo</Link></li>                 
                <li><Link to ='/Hook'>Hooks</Link></li> 
                <li><Link to ='/Databse-api'>Api</Link></li> 
                <li><Link to ='/If-Else'>If/Else/Context</Link></li>
                <li><Link to ='/HOC-com'>HOC</Link></li>
                <li><Link to ='/Redux'>Redux</Link></li>
                <li><Link to ='/Spidey-Get'>Redux Get/Post/Del</Link></li>
                <li><Link to ='/Type-Script'>Type Script</Link></li>
                {/* <li><Link to ='/Unmount'>Unmount</Link></li>    Procees is Index.js File  & Index.jsx        */}
            </ul>
              
              </div>
            </div>	
        )
    }
}
export default Menu