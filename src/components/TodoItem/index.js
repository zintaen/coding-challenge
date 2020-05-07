import React from "react";

import "./styles.scss";
import CompleteIcon from "../../assets/icons/complete.svg";
import RemoveIcon from "../../assets/icons/remove.svg";

export const TodoItem = ({
    data,
    onCompleteItem,
    onRemoveItem,
}) => {
    const _handleCompleteItem = () => {
        onCompleteItem(data.id);
    };

    const _handleRemoveItem = () => {
        onRemoveItem(data.id);
    };

    return (
        <div
            className={
                data.isCompleted ? "todo-item todo-item--complete" : "todo-item"
            }
        >
            <img
                src={CompleteIcon}
                className="todo-item__icon"
                alt="Complete icon"
                onClick={_handleCompleteItem}
            />
            <div className="todo-item__title">{data.title}</div>
            <img
                src={RemoveIcon}
                className="todo-item__icon"
                alt="Remove icon"
                onClick={_handleRemoveItem}
            />
        </div>
    );
};
