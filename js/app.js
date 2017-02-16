import ReactDOM from 'react-dom';
import React from 'react';


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;


import Devices from './components/Devices';
import Console from './components/Console';
import Services from './components/Services';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route history={hashHistory} path="/" component={Devices} />
		<Route history={hashHistory} path="/console" component={Console} />
		<Route history={hashHistory} path="/services" component={Services} />
	</Router>,
	document.getElementById('root')
);