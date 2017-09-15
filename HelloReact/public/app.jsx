var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')


// Prop variables. Get passed to component on initialization
var firstName = "Brian";
var firstMessage = "This is a from a component!";
ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);
