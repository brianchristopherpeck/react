var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')


// Prop variables. Get passed to component on initialization
var firstName = "BP";
var firstMessage = "This is a from a component!";
ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);
