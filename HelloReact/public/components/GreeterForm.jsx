var React = require('react');

// Presentational component... doesn't maintain a state
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();
      var updates = {};
      var name = this.refs.name.value;
      var message = this.refs.message.value;
      if (name.length > 0) {
        this.refs.name.value= '';
        updates.name= name;
      } 
      if (message.length > 0) {
        this.refs.message.value= '';
        updates.message = message;
      }
      this.props.onNewData(updates);
    },
    render: function () {
      return(
        <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name"/>
        </div>
        <div>
          <input type="textarea" ref="message" placeholder="Enter Message"/>
        </div>
        <div>
          <button>Set Name</button>
        </div>
        </form>
      );
    }
})

module.exports = GreeterForm;