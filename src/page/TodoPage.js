import React, {useEffect, useState} from "react";
import TodoList from "../components/todo/list/TodoList";
import TodoService from "../api/TodoService";
import {useFetching} from "../hooks/useFetching";
import AppLoading from "../components/UI/loading/AppLoading";
import AppModal from "../components/UI/modal/AppModal";
import CreateTodoForm from "../components/todo/form/CreateTodoForm";

function TodoPage() {
    const [todoList, setTodoList] = useState([]);
    const [modalCreateTodoVisible, setModalCreateTodoVisible] = useState(false);
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

    function removeTodo(id) {
        setTodoList(todoList.filter(todo => Number(todo.id) !== Number(id)))
    }

    function createTodo(todo) {
        setTodoList([...todoList, todo])
        setModalCreateTodoVisible(false)
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
                <AppModal visible={modalCreateTodoVisible} setVisible={setModalCreateTodoVisible}>
                    <CreateTodoForm createTodo={createTodo}/>
                </AppModal>
                <TodoList todoList={todoList}
                          setModalCreateTodoVisible={setModalCreateTodoVisible}
                          changeTodoCompleted={changeTodoCompleted}
                          removeTodo={removeTodo}/>
            </div>
        </section>
    )
}

export default TodoPage;
