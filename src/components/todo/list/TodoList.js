import React from "react";
import classes from "./TodoList.module.scss"
import TodoItem from "../item/TodoItem";

function TodoList({todoList}) {
    if(!todoList.length) {
        return (
            <div className='not-available-text'>
                You not have Todo
            </div>
        )
    }
    return (
        <div className={[classes.todoList].join(' ')}>
            <h1 className={[classes.todoListTitle].join(' ')}>
                You have {todoList.length} Todo
            </h1>
            {todoList.map((todo, index) =>
                <TodoItem key={todo.id} number={index + 1} todo={todo} />
            )}
        </div>
    )
}

export default TodoList
