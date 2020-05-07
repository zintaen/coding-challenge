import React, { useState } from "react";

import "./styles.scss";
import AddIcon from "../../assets/icons/add.svg";

export const AddForm = ({ onAddItem }) => {
    const [todo, setTodo] = useState();

    const _handleSetTodo = (e) => {
        setTodo(e.target.value);
    };

    const _handleAddItem = () => {
        if (!todo) {
            alert("Please input title!");
            return;
        }
        onAddItem(todo);
    };

    return (
        <div className="add-form">
            <div className="add-form__header">Add new todo</div>
            <div className="add-form__body">
                <img
                    src={AddIcon}
                    className="add-form__body__icon"
                    alt="Add icon"
                    onClick={_handleAddItem}
                />
                <input
                    type="text"
                    className="add-form__body__input"
                    onChange={_handleSetTodo}
                />
            </div>
        </div>
    );
};
