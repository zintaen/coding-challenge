import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import Axios from "axios";
import { connect } from "react-redux";

const TodoForm = ({ dispatch, datePicker }) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Axios({
      url: "http://localhost:3001/todos",
      method: "post",
      data: {
        title: todo,
        isCompleted: false,
        date: datePicker
      }
    })
      .then(res => {
        if (res.status === 201) {
          dispatch({
            type: "ADD_TODO_SUCCESS",
            payload: res.data
          });
          alert("Add Todo Success !");
          setTodo("");
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <form className="todoForm">
      <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Todo ...."
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
      <Button className="btn-submit" color="danger" onClick={handleSubmit}>
        Add Todo
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TodoForm);
