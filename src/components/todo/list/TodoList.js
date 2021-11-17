import React from "react";
import classes from "./TodoList.module.scss"
import TodoItem from "../item/TodoItem";
import AppButton from "../../UI/button/AppButton";
import {TransitionGroup, CSSTransition} from "react-transition-group";

function TodoList({todoList, changeTodoCompleted, removeTodo, setModalCreateTodoVisible}) {
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
                <AppButton onClick={() => {
                    setModalCreateTodoVisible(true)
                }}>
                    Create Todo
                </AppButton>
            </div>
            <TransitionGroup>
                {todoList.map((todo, index) =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem todo={todo}
                                  changeTodoCompleted={changeTodoCompleted}
                                  removeTodo={removeTodo}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default TodoList
