// TODO

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hover: false
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    };

    return (
      <li style={style}
      onClick={this.onListItemClick.bind(this)}
      onListItemMouseEnter={this.onListItemMouseEnter.bind(this)}
      onListItemMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.todo}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList todos={['Milk', 'Cereal', 'Bread', 'Potato', 'Ham']}></GroceryList>
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));
