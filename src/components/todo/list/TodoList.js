import React, {useMemo} from "react";
import classes from "./TodoList.module.scss"
import TodoItem from "../item/TodoItem";
import AppButton from "../../UI/button/AppButton";
import {TransitionGroup, CSSTransition} from "react-transition-group";

function TodoList({todoList, changeTodoCompleted, removeTodo, setModalCreateTodoVisible}) {
    const pageTitle = useMemo(() => {
        if(todoList.length) {
            return `You have ${todoList.length} Todo`
        }
        return 'You not have Todo'
    }, [todoList.length])

    return (
        <div className={[classes.todoList].join(' ')}>
            <div className={[classes.todoListHeader].join(' ')}>
                <h1 className={[classes.todoListTitle].join(' ')}>
                    {pageTitle}
                </h1>
                <AppButton onClick={() => {
                    setModalCreateTodoVisible(true)
                }}>
                    Create Todo
                </AppButton>
            </div>
            <TransitionGroup>
                {todoList.map((todo) =>
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
