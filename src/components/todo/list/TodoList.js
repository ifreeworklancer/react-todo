import React from "react";
import classes from "./TodoList.module.scss"
import TodoItem from "../item/TodoItem";
import AppButton from "../../UI/button/AppButton";

function TodoList({todoList, changeTodoCompleted, removeTodoItem}) {
    if (!todoList.length) {
        return (
            <div className='not-available-text'>
                You not have Todo
            </div>
        )
    }
    return (
        <div className={[classes.todoList].join(' ')}>
            <div className={[classes.todoListHeader].join(' ')}>
                <h1 className={[classes.todoListTitle].join(' ')}>
                    You have {todoList.length} Todo
                </h1>
                <AppButton>Create Todo</AppButton>
            </div>
            {todoList.map((todo, index) =>
                <TodoItem key={todo.id} number={index + 1} todo={todo} changeTodoCompleted={changeTodoCompleted}
                          removeTodoItem={removeTodoItem}/>
            )}
        </div>
    )
}

export default TodoList
