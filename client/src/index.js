import React from 'react';
import ReactDOM from 'react-dom';
import './css/Style.scss'
import './css/Admin.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js'
import './Js/Admin-Custom.js'
import Homepage from './Components/Home'
import Unmount from './Components/UnmountA'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Homepage / > , document.getElementById('root'));
ReactDOM.render( < Unmount / > , document.getElementById('rootb'));
ReactDOM.unmountComponentAtNode(document.getElementById('rootb'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();