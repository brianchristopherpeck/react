var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Brian',
	location: 'San Diego'
};

var objTwo = {
	age: 34,
	...objOne
};

console.log(objTwo);

// Prop variables. Get passed to component on initialization
var firstMessage = "This is a from a component!";
ReactDOM.render(
  <h1>Boiler Plate App!</h1>,
  document.getElementById('app')
);
