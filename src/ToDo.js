import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import { Label } from "reactstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Todo extends Component {
  state = {
    date: new Date(),
    show: false
  };

  onChange = date => {
    const { dispatch } = this.props;
    dispatch({
      type: "CHANGE_DATE",
      payload: date
    });
    this.setState({ date, show: true });
  };

  render() {
    const { date, show } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="container">
        <h2>React calendar</h2>
        <Calendar onChange={this.onChange} value={this.state.date} />

        {show && (
          <div>
            <TodoForm datePicker={date} dispatch={dispatch} />
            <div className="todoList">
              <Label for="exampleEmail">List Todo</Label>
              <TodoItem datePicker={date} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, null)(Todo);
