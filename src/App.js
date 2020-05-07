import React, { useContext } from "react";
import moment from "moment";

import { CalendarField, TodoItem, AddForm, GlobalContext } from "./components";
import "./App.scss";

function App() {
    const context = useContext(GlobalContext);
    const selectedDate = moment(context.selectedDate).format("YYYY-MM-DD");
    const filteredTodos = context.todos.filter(
        (todo) => todo.date === selectedDate
    );

    return (
        <div className="app">
            <CalendarField onAddItem={context.createTodo} />
            <h1>Selected Date: {selectedDate}</h1>
            <AddForm onAddItem={context.createTodo} />
            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo, index) => (
                    <TodoItem
                        data={todo}
                        key={index}
                        onCompleteItem={context.completeTodo}
                        onRemoveItem={context.deleteTodo}
                    />
                ))
            ) : (
                <h2>No todo yet</h2>
            )}
        </div>
    );
}

export default App;
