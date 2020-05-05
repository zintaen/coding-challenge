import React, { Component } from "react";
import Todo from "./ToDo";
import { connect } from "react-redux";
import { getData } from "./action";

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return <Todo todoList={this.props.todoList} />;
  }
}
const mapDispatchToProps = {
  getData
};
const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
