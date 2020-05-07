export default (state, action) => {
    switch (action.type) {
        case "READ_TODOS":
            return {
                ...state,
                todos: action.payload,
            };
        case "CREATE_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "COMPLETE_TODO":
            const completedTodo = action.payload;
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === completedTodo.id) {
                    return {...todo, ...completedTodo};
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (employee) => employee.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
