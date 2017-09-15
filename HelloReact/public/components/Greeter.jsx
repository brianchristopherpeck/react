var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

// Container component... maintains state of name... state can be changed. Props cannot
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    // State variables are maintaned in state until changed by UI
    var name = this.state.name; // state differentiates from a prop
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;