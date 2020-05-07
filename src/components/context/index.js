import React, { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import TodoReducer from "./TodoReducer";

const BASE_API = "http://localhost:3001/todos";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [state, dispatch] = useReducer(TodoReducer, { todos: [] });

    const _handleCreateTodo = (title) => {
        axios({
            method: "POST",
            url: BASE_API,
            data: {
                title,
                isCompleted: false,
                date: moment(selectedDate).format("YYYY-MM-DD"),
            },
        }).then((res) => {
            dispatch({
                type: "CREATE_TODO",
                payload: res.data,
            });
        });
    };

    const _handleCompleteTodo = (id) => {
        axios({
            method: "PATCH",
            url: `${BASE_API}/${id}`,
            data: { isCompleted: true },
        }).then((res) => {
            dispatch({
                type: "COMPLETE_TODO",
                payload: res.data,
            });
        });
    };

    const _handleDeleteTodo = (id) => {
        axios({ method: "DELETE", url: `${BASE_API}/${id}` }).then(() => {
            dispatch({
                type: "DELETE_TODO",
                payload: id,
            });
        });
    };

    useEffect(() => {
        axios({ method: "GET", url: BASE_API }).then((res) => {
            dispatch({
                type: "READ_TODOS",
                payload: res.data,
            });
        });
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                selectedDate,
                setSelectedDate,
                todos: state.todos,
                createTodo: _handleCreateTodo,
                completeTodo: _handleCompleteTodo,
                deleteTodo: _handleDeleteTodo,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
