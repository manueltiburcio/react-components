class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  onMouseEnter() {
    this.setState({hover: true})
  }

  onMouseLeave() {
    this.setState({hover: false})
  }


  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onMouseEnter.bind(this)}
      onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.todo}</li>
    )
  }

}

var GroceryList = (props) => {



  return (
  <ul>
    {props.todos.map(todo => <GroceryListItem todo={todo}/>)}
  </ul>
  );

}




var App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList todos={['Milk', 'Cookie', 'Cereal']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
