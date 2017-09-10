// Presentational component... takes props and renders to screen
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!!</p>
      </div>
    );
  }
})

// Presentational component... doesn't maintain a state
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();

      var name = this.refs.name.value;

      if(name.length > 0) {
        this.refs.name.value = "";
        this.props.onNewName(name);
      }
    },
    render: function () {
      return(
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter Name"/>
          <button>Set Name</button>
        </form>
      );
    }
})
// Container component... maintains state of name... state can be changed. Props cannot
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    // State variables are maintaned in state until changed by UI
    var name = this.state.name; // state differentiates from a prop
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});
// Prop variables. Get passed to component on initialization
var firstName = "BP";
var message = "This is a from a component!";
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
