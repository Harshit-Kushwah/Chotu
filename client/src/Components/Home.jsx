import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Aboutme from './Index'
import About from './State'
import Error from './Error';
import Lifecycle from './Lifecycle'
import Updatelifecycle from './Lifecycle_update'
import PureComponeta from './PureComponeta'
import Huks from './Hook'
import Api from './api'
import Ifelse from './If-else'
import HOC from './HOC'
import Reddata from './Reduxdata'
import Reduxgpd from './Reduc-gpd'
import Typesrc from './Type-script'
class Homepage extends Component{

    render() {
        return (    
            <>    
<Router>
    <Switch>
    <Route path='/' exact component={Aboutme}></Route>
    <Route path='/Hello' component={About}></Route>
    <Route path='/Life' component={Lifecycle}></Route>
    <Route path='/Update-Mount' component={Updatelifecycle}></Route>
    <Route path='/Pure-componet' component={PureComponeta}></Route>
    <Route path='/Hook' component={Huks}></Route>
    <Route path='/Databse-api' component={Api}></Route>
    <Route path='/If-Else' component={Ifelse}></Route>
    <Route path='/HOC-com' component={HOC}></Route>
    <Route path='/Redux' component={Reddata}></Route>
    <Route path='/Spidey-Get' component={Reduxgpd}></Route>
    <Route path='/Type-Script' component={Typesrc}></Route>
    <Route path='*' component={Error}></Route>
    <Aboutme/>
    </Switch>
</Router>
        </>
        );
    }
}
export default Homepage;