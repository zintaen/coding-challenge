import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CustomInput } from "reactstrap";

const TodoItem = ({ todoList, datePicker }) => {
  const parseDatePicker = Date.parse(datePicker);
  const result = todoList.filter(
    item => Date.parse(item.date) === parseDatePicker
  );

  // console.log(result);
  return (
    <div className="todoItems">
      <div className="todoItem">
        <CustomInput id="todo" type="checkbox" label="huy" />
        <span className="delete">X</span>
        {/* {result.map((item, index) => (
          <Fragment>
            <CustomInput
              key={index + 1}
              id={index + 1}
              type="checkbox"
              label={item.title}
            />
            <span className="delete">X</span>
          </Fragment>
        ))} */}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(mapStateToProps)(TodoItem);
