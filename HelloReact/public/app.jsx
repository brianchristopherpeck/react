var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    // State variables are maintaned in state until changed by UI
    var name = this.state.name; // state differentiates from a prop
    var message = this.props.message;
    return (
      <div>

        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
