import React, {useEffect, useState} from "react";
import TodoList from "../components/todo/list/TodoList";
import TodoService from "../api/TodoService";
import {useFetching} from "../hooks/useFetching";
import AppLoading from "../components/UI/loading/AppLoading";

function TodoPage() {
    const [todoList, setTodoList] = useState([]);
    const [getTodoList, isTodoLoading] = useFetching(async () => {
        const response = await TodoService.getTodoList();
        setTodoList(response)
    })

    function changeTodoCompleted(id) {
        setTodoList(todoList.map(todo => {
            if (Number(todo.id) === Number(id)) {
                todo.completed = !todo.completed;
            }
            return todo
        }))
    }

    function removeTodoItem(id) {
        setTodoList(todoList.filter(todo => Number(todo.id) !== Number(id)))
    }

    useEffect(() => {
        getTodoList()
    }, [])

    return (
        <section className="todo-page">
            <div className="container">
                {isTodoLoading &&
                <AppLoading/>
                }
                <TodoList todoList={todoList}
                          changeTodoCompleted={changeTodoCompleted}
                          removeTodoItem={removeTodoItem}/>
            </div>
        </section>
    )
}

export default TodoPage;
