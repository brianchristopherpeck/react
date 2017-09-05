var Greeter = React.createClass({
  render: function() {
    return (
      <div>

        <h1>Hello Reactor Guy!</h1>
        <p>This is a React.js app!</p> 

      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
