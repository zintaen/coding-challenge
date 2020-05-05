const initialState = {
  todoList: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_LIST_TODO":
      state.todoList = [...payload];
      return state;
    case "ADD_TODO_SUCCESS":
      state.todoList = [...state.todoList, payload];
      return state;
    default:
      return state;
  }
};

export default reducer;
