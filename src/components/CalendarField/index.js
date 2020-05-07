import React, { useContext } from "react";
import moment from "moment";

import { GlobalContext } from "../index";

import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import Calendar from "react-calendar";

export const CalendarField = () => {
    const context = useContext(GlobalContext);

    const _handleSetDateClassname = ({ activeStartDate, date, view }) => {
        if (!context.todos.length) {
            return null;
        }

        const currentCalendarCell = moment(date).format(
            "YYYY-MM-DD"
        );
        const filteredTodos = context.todos.filter(
            (todo) => todo.date === currentCalendarCell
        );

        return filteredTodos.length > 0 ? "have-todo" : null;
    };

    return (
        <div className="calendar">
            <Calendar
                onChange={context.setSelectedDate}
                value={context.selectedDate}
                tileClassName={_handleSetDateClassname}
            />
        </div>
    );
};
