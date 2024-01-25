import React from "react";
import { Task } from "../Task/Task";
export const TodoList = ()=>{
    return(
        <div className="todoList">
            <div className="todoList__wrapper">
                <div className="todoList__header">
                    <div className="todoList__icon"></div>
                    <div className="todoList__text">
                        todo
                    </div>
                </div>
                <Task/>
            </div>
        </div>
    )
}